import jwt from "jsonwebtoken";
import connectDB from "../../../middleware/mongodb";
import User from "../../../models/user";
import { getResponse, RequestMethod } from "../../../utils/helpers";
const { GET } = RequestMethod;
const { req_method_not_supported, data_incomplete } = RequestMethod;

const handler = async (req, res) => {
  const { method, headers } = req;
  const { authorization } = headers;
  const token = authorization.replace("Bearer ", "");

  if ([GET].indexOf(method) === -1) {
    return res
      .status(400)
      .send(getResponse(400, "Método de consulta no soportado!", null));
  }

  const decoded = jwt.verify(token, process.env.SECRET_KEY);

  if (!decoded) {
    return res.status(404).send(getResponse(400, "Sesión inválida!", null));
  }

  try {
    return await getUserInfo(decoded, res);
  } catch (error) {
    return res
      .status(500)
      .send(
        getResponse(500, "A ocurrido un error con el servidor!", error.message)
      );
  }
};

const getUserInfo = async (body, res) => {
  const { id } = body;
  const result = await User.findOne({ _id: id });
  if (!result) {
    return res.status(404).send(getResponse(400, "Usuario inválido!", null));
  }

  delete result.password;
  return res.status(200).send(getResponse(200, "Transacción exitosa!", result));
};

export default connectDB(handler);
