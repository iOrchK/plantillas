"use strict";
const FindByIdDao = require("../dao/findById-dao");
const Headers = {
  "Access-Control-Allow-Origin": "*",
};

module.exports.findById = async (event) => {
  let response;

  try {
    console.log("Request:", event);

    response = await FindByIdDao(
      process.env.DYNAMODB_TABLE,
      "id",
      event.pathParameters.id
    );

    console.log("Response:", response);
    return {
      statusCode: 200,
      headers: Headers,
      body: JSON.stringify(response),
    };
  } catch (e) {
    console.error("Handler findById Error:", e);
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
