import connectDB from "../../../middleware/mongodb";
// import bcrypt from "../../middleware/bcrypt";
import User from "../../../models/user";
import { getResponse, RequestMethod } from "../../../utils/helpers";
const { POST } = RequestMethod;
const { req_method_not_supported, data_incomplete } = RequestMethod;

const handler = async (req, res) => {
  const { method, body } = req;
  if ([POST].indexOf(method) === -1) {
    return res
      .status(400)
      .send(getResponse(400, "Método de consulta no soportado!", null));
  }

  try {
    return await create(body, res);
  } catch (error) {
    return res
      .status(500)
      .send(
        getResponse(500, "A ocurrido un error con el servidor!", error.message)
      );
  }
};

const create = async (body, res) => {
  // Check if email or password is provided
  const { email } = body;
  if (!email) {
    return res
      .status(400)
      .send(getResponse(400, "Por favor ingrese el correo!", null));
  }

  const exist = await User.findOne({ email });
  if (exist) {
    return res
      .status(400)
      .send(getResponse(400, "Este correo ya ha sido registrado!", null));
  }

  // Hash password to store it in DB
  // const passwordhash = await bcrypt.sign(password);
  const password = "123456";
  const user = new User({
    email: email.trim(),
    password: password.trim(),
  });

  // Create new user
  const result = await user.save();
  return res.status(200).send(getResponse(201, "Usuario registrado!", result));
};

export default connectDB(handler);
