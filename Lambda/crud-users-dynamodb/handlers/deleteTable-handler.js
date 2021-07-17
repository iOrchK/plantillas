"use strict";
const DeleteTableDao = require("../dao/deleteTable-dao");
const Headers = {
  "Access-Control-Allow-Origin": "*",
};

module.exports.deleteTable = async (event) => {
  let req;
  let response;
  try {
    if (event.headers) {
      req = JSON.parse(event.body);
    } else {
      req = event;
    }

    console.log("Request:", req);
    response = await DeleteTableDao(process.env.DYNAMODB_TABLE);

    console.log("Response:", response);
    return {
      statusCode: 200,
      headers: Headers,
      body: JSON.stringify(response),
    };
  } catch (e) {
    console.error("Handler deleteTable ERROR:", e);
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
