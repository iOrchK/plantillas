/**
 * Definición de librerías node
 */
const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

/**
 * Inicializar dotenv para utilizar las variables de entorno
 */
dotenv.config();

/**
 * Definición de la app express
 */
const app = express();

/**
 * Inicialiar Mongoose
 */
const { DATABASE_URL } = process.env;
mongoose
  .connect(DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((db) => console.log(`MongoDB Connected - ${DATABASE_URL}`))
  .catch((err) => console.log(err));

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());

/**
 * Definición de rutas de autenticación
 */
app.use("/authentication", require("./routes/authentication"));

/**
 * Captar error 404 y reenviar al manejador de errores
 */
app.use(function (req, res, next) {
  console.log("Manejador de errores");
  next(createError(404));
});

/**
 * Manejador de errores
 */
app.use(function (err, req, res, next) {
  // Variables para el view de error, solo se muestra el error en ambiente de desarrollo
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // Renderizar view de error
  res.status(err.status || 500).json(err);
});

module.exports = app;
