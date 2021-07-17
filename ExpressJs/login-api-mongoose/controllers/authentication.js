const User = require("../core/models/user");
const jwt = require("jwt-simple");
const moment = require("moment");
const Security = require("../core/services/security");

module.exports.register = async (req, res) => {
  const userExist = await User.findOne({ email: req.body.email });
  if (userExist)
    return res.status(400).json({ message: "Este correo ya está registrado" });
  const newUser = new User(req.body);
  newUser
    .save()
    .then((result) => {
      return res.status(201).json(result);
    })
    .catch((error) => {
      return res
        .status(500)
        .json({ message: "Error en la petición", detail: error });
    });
};

module.exports.logIn = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).json({ message: "Correo incorrecto" });
  const pass1 = await Security.DecipherText(req.body.password);
  const pass2 = await Security.DecipherText(user.password);
  if (pass1 !== pass2)
    return res.status(400).json({ message: "Contraseña incorrecta" });
  const payload = {
    sub: user._id,
    iat: moment().unix(),
    exp: moment()
      .add(process.env.SESSION_TIMEOUT / 1000, "minutes")
      .unix(),
  };
  user.token = jwt.encode(payload, process.env.SECRET);
  user
    .save()
    .then((result) => {
      return res.status(200).json(result);
    })
    .catch((error) => {
      return res
        .status(500)
        .json({ message: "Error en la petición", detail: error });
    });
};

module.exports.logOut = async (req, res) => {
  const result = await User.findOne({ _id: req.body.user._id });
  if (!result) return res.status(400).json({ message: "Usuario inválido" });
  result.token = null;
  result
    .save()
    .then((result) => {
      return res.status(200).json(result);
    })
    .catch((error) => {
      return res
        .status(500)
        .json({ message: "Error en la petición", detail: error });
    });
};
