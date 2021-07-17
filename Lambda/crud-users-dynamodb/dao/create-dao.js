const AWS = require("aws-sdk");
AWS.config.update({ region: "us-east-1" });
const DynamoDB = new AWS.DynamoDB.DocumentClient();

const Moment = require("moment");
Moment.locale("es-MX");

module.exports = async (tableName, items) => {
  console.log(`Executing create in table ${tableName}`);
  items.token = null;
  items.creation_date = Moment().format("YYYY-MM-DD hh:mm:ss");
  items.creation_date_timestamp = Moment().unix();

  const params = {
    TableName: tableName,
    Item: items,
  };

  return await new Promise((resolve, reject) => {
    DynamoDB.put(params, (error, result) => {
      if (error) {
        console.error("DAO create ERROR:", error);
        reject({
          statusCode: 400,
          body: {
            message: "Ha ocurrido un error en la consulta.",
          },
        });
        return;
      }

      console.log("Created:", result);
      resolve({ message: "Registro creado con éxito!" });
    });
  });
};
