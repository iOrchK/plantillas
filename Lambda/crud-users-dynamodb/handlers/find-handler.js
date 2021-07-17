"use strict";
const FindDAO = require("../dao/find-dao");
const Headers = {
  "Access-Control-Allow-Origin": "*",
};

module.exports.find = async (event) => {
  let response;

  try {
    console.log("Request: ", event.multiValueQueryStringParameters);
    response = await FindDAO(
      process.env.DYNAMODB_TABLE,
      event.multiValueQueryStringParameters
    );

    console.log("Response:", response);
    return {
      statusCode: 200,
      headers: Headers,
      body: JSON.stringify(response),
    };
  } catch (e) {
    console.error("Handler find ERROR:", e);
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
