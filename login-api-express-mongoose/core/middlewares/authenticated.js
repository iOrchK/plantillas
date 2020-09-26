const jwt = require("jwt-simple");
const moment = require("moment");

exports.ensureAuth = function (req, res, next) {
  if (!req.headers.authorization) {
    console.log("No se encontró la cabezera de autorización");
    return res.status(403).send({ message: "Forbiden." });
  } else {
    const secret = process.env.SECRET;
    const token = req.headers.authorization.replace(/['"]+/g, "");
    try {
      const payload = jwt.decode(token, secret);
      if (payload.exp > moment().unix()) {
        return res.status(401).send({
          message: "Token expired",
        });
      }
    } catch (ex) {
      return res.status(404).send({
        message: "Token invalid",
      });
    }
    req.user = payload;
    next();
  }
};
