"use strict";
const CreateTableDAO = require("../dao/createTable-dao");
const Headers = {
  "Access-Control-Allow-Origin": "*",
};

module.exports.createTable = async (event) => {
  let req;
  let response;

  try {
    if (event.headers) {
      req = JSON.parse(event.body);
    } else {
      req = event;
    }

    console.log("Request:", req);
    response = await CreateTableDAO(
      process.env.DYNAMODB_TABLE,
      "id",
      process.env.READ_CAPACITY_UNITS,
      process.env.WRITE_CAPACITY_UNITS
    );

    console.log("Response:", response);
    return {
      statusCode: 201,
      headers: Headers,
      body: JSON.stringify(response),
    };
  } catch (e) {
    console.error("Handler createTable Error:", e);
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
