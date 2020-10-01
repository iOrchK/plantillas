"use strict";
const DeleteDAO = require("../dao/delete-dao");
const Headers = {
  "Access-Control-Allow-Origin": "*",
};

module.exports.delete = async (event) => {
  let response;
  try {
    console.log("Request:", event);
    response = await DeleteDAO(
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
    console.error("Handler delete Error:", e);
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
