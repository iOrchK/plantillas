"use strict";
const UpdateDao = require("../dao/update-dao");
const SchemaVal = require("../validations/schemaValidator");
var FS = require("fs");
const Headers = {
  "Access-Control-Allow-Origin": "*",
};

module.exports.update = async (event) => {
  let req;
  let response;
  try {
    if (event.headers) {
      req = JSON.parse(event.body);
    } else {
      req = event;
    }

    console.log("Request:", req);
    const schema = JSON.parse(FS.readFileSync("./schemas/update.json"));
    await SchemaVal(req, schema);

    // Parameters to update in table
    let params = {
      userName: req.userName,
      email: req.email,
      password: req.password,
      roleId: req.roleId,
      active: req.active,
    };

    response = await UpdateDao(
      process.env.DYNAMODB_TABLE,
      "id",
      event.pathParameters.id,
      params
    );

    console.log("Response:", response);
    return {
      statusCode: 200,
      headers: Headers,
      body: JSON.stringify(response),
    };
  } catch (e) {
    console.error("Handler update Error:", e);
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
