import connectDB from "../../../middleware/mongodb";
// import bcrypt from "../../middleware/bcrypt";
import User from "../../../models/user";
import { getResponse, RequestMethod } from "../../../utils/helpers";
const { GET, POST, PUT, DELETE } = RequestMethod;
const { req_method_not_supported, data_incomplete } = RequestMethod;

const handler = async (req, res) => {
  const { method, param, body } = req;
  if (Object.keys(RequestMethod).indexOf(method) === -1) {
    return res
      .status(400)
      .send(getResponse(400, "Método de consulta no soportado!", null));
  }

  try {
    switch (method) {
      case GET:
        return await list(res);
      case POST:
        return await create(body, res);
      case PUT:
        return await update(param.id, body, res);
      case DELETE:
        return await remove(param.id, res);
    }
  } catch (error) {
    return res
      .status(500)
      .send(
        getResponse(500, "A ocurrido un error con el servidor!", error.message)
      );
  }
};

const list = async (res) => {
  const result = await User.find();
  return res
    .status(200)
    .send(getResponse(200, "Búsqueda de usuarios exitosa!", result));
};

const create = async (body, res) => {
  // Check if email or password is provided
  const { email, password } = body;
  if (!email || !password) {
    return res
      .status(400)
      .send(
        getResponse(400, "El correo y la contraseña son requeridos!", result)
      );
  }

  // Hash password to store it in DB
  // const passwordhash = await bcrypt.sign(password);
  const user = new User({
    email: email.trim(),
    password: password.trim(),
  });

  // Create new user
  const result = await user.save();
  return res.status(200).send(getResponse(201, "Usuario creado!", result));
};

const update = async (id, body, res) => {
  const result = await User.updateOne({ id }, body);
  return res.status(200).send(getResponse(202, "Usuario modificado!", result));
};

const remove = async (id, res) => {
  const result = await User.updateOne({ id }, { status: "deleted" });
  return res.status(200).send(getResponse(203, "Usuario eliminado!", result));
};

export default connectDB(handler);
