"use strict";

const FS = require("fs");
const Crypto = require("crypto");
const UUID = () => Crypto.randomBytes(16).toString("hex");
const SchemaVal = require("../validations/schemaValidator");
const CreateDAO = require("../dao/create-dao");
const Headers = {
  "Access-Control-Allow-Origin": "*",
};

module.exports.create = async (event) => {
  let req;
  let response;

  try {
    if (event.headers) {
      req = JSON.parse(event.body);
    } else {
      req = event;
    }

    console.log("Request:", req);
    const schema = JSON.parse(FS.readFileSync("./schemas/create.json"));
    await SchemaVal(req, schema);

    // Parameters to insert in table
    let params = {
      id: UUID(),
      userName: req.userName,
      email: req.email,
      password: req.password,
      roleId: req.roleId,
      active: req.active,
    };

    response = await CreateDAO(process.env.DYNAMODB_TABLE, params);

    console.log("Response:", response);
    return {
      statusCode: 201,
      headers: Headers,
      body: JSON.stringify(response),
    };
  } catch (e) {
    console.error("Handler create ERROR: ", e);
    response = {
      message: e.body.message || "Ha ocurrido un error inesperado.",
    };

    return {
      statusCode: e.statusCode || 500,
      headers: Headers,
      body: JSON.stringify(response),
    };
  }
};
