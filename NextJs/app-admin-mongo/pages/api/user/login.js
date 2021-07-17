import jwt from "jsonwebtoken";
import connectDB from "../../../middleware/mongodb";
import User from "../../../models/user";
import {
  comparePassword,
  getResponse,
  RequestMethod,
} from "../../../utils/helpers";
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
    return await login(body, res);
  } catch (error) {
    return res
      .status(500)
      .send(
        getResponse(500, "A ocurrido un error con el servidor!", error.message)
      );
  }
};

const login = async (body, res) => {
  // Check if email or password is provided
  const { email, password } = body;
  if (!email || !password) {
    return res
      .status(400)
      .send(
        getResponse(400, "Por favor ingrese el correo y la contraseña!", null)
      );
  }

  let user = await User.findOne({ email: email.trim() });
  if (!user) {
    return res
      .status(400)
      .send(getResponse(400, "El correo es incorrecto!", null));
  }

  if (user.status !== "active") {
    return res
      .status(400)
      .send(getResponse(400, "Esta cuenta no está activa!", null));
  }

  const userId = user.id,
    userEmail = user.email,
    userPassword = user.password,
    userCreated = user.since;
  /* Check and compare password */
  const passwordCorrect = comparePassword(password, userPassword);
  if (!passwordCorrect) {
    return res
      .status(400)
      .send(getResponse(400, "La contraseña es incorrecta!", null));
  }

  const payload = {
    id: userId,
    email: userEmail,
    since: userCreated,
  };
  /* Sign token */
  const token = jwt.sign(payload, process.env.SECRET_KEY, {
    expiresIn: 31556926, // 1 year in seconds
  });

  user.token = token;
  const result = await user.save();
  delete result.password;
  return res.status(200).send(getResponse(201, "Sesión iniciada!", result));
};

export default connectDB(handler);
