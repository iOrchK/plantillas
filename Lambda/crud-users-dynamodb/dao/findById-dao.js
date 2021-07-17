const AWS = require("aws-sdk");
AWS.config.update({ region: "us-east-1" });
const DynamoDB = new AWS.DynamoDB.DocumentClient();

module.exports = async (tableName, keyName, keyValue) => {
  console.log(`Executing findById in ${tableName}`);
  let key = {};
  key[keyName] = keyValue;

  const params = {
    TableName: tableName,
    Key: key,
  };

  return await new Promise((resolve, reject) => {
    DynamoDB.get(params, (error, result) => {
      if (error) {
        console.error("DAO findById Error:", error);
        reject({
          statusCode: 400,
          body: {
            message: "Ha ocurrido un error en la consulta.",
          },
        });
        return;
      }

      if (result.Item) {
        console.log("Item found:", result);
        resolve(result.Item);
        return;
      }

      reject({
        statusCode: 404,
        body: {
          message: "No se encontraron coincidencias de búsqueda",
        },
      });
    });
  });
};
