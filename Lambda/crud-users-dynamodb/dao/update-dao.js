const AWS = require("aws-sdk");
AWS.config.update({ region: "us-east-1" });
const DynamoDB = new AWS.DynamoDB.DocumentClient();

const Moment = require("moment");
Moment.locale("es-MX");

module.exports = async (tableName, keyName, keyValue, items) => {
  console.log("Executing update in " + tableName);
  let key = {};
  key[keyName] = keyValue;
  let expressionAttributeValues = {};
  let updateExpression = "";
  let conditionExpression = "attribute_exists(" + keyName + ")";

  items.modification_date = Moment().format("YYYY-MM-DD hh:mm:ss");
  items.modification_date_timestamp = Moment().unix();

  for (var prop in items) {
    if (items[prop] || items[prop] === 0 || items[prop] === false) {
      let nombreAttributo = ":" + prop;
      expressionAttributeValues[nombreAttributo] = items[prop];
      updateExpression += prop + " = " + nombreAttributo + ", ";
    }
  }

  updateExpression =
    "SET " + updateExpression.slice(0, updateExpression.length - 2);
  const params = {
    TableName: tableName,
    Key: key,
    ConditionExpression: conditionExpression,
    ExpressionAttributeValues: expressionAttributeValues,
    UpdateExpression: updateExpression,
    ReturnValues: "ALL_NEW",
  };

  return await new Promise((resolve, reject) => {
    DynamoDB.update(params, (error, result) => {
      if (error) {
        console.error("DAO update Error: ", error);
        if (error.code === "ConditionalCheckFailedException") {
          reject({
            statusCode: 404,
            body: {
              message: "No se encontró el registro.",
            },
          });
          return;
        }

        console.log("Updated:", result);
        reject({
          statusCode: 400,
          body: {
            message: "Ha ocurrido un error en la consulta.",
          },
        });
        return;
      }

      resolve({
        message: "Registro actualizado con éxito!",
      });
    });
  });
};
