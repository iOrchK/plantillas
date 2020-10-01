let Validator = require("jsonschema").Validator;
let V = new Validator();

module.exports = async (data, schema) => {
  let detail = [];
  let response = { statusCode: 200 };

  try {
    let validation_result = await V.validate(data, schema);
    if (validation_result.valid) {
      console.log("Schema validator: ok");
      return Promise.resolve(response);
    } else {
      for (let item of validation_result.errors) {
        console.error(item);
        detail.push(item.stack);
      }

      console.error("Schema validator - InvalidSchemaError: ", detail);

      return Promise.reject({
        statusCode: 400,
        body: {
          message: "Favor de verificar los campos",
        },
      });
    }
  } catch (error) {
    console.log("Schema validator - SyntaxError: ", error);

    return Promise.reject({
      statusCode: 400,
      body: {
        message: "Ha ocurrido un error inesperado",
      },
    });
  }
};
