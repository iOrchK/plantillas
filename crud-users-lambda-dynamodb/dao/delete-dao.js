const AWS = require("aws-sdk");
AWS.config.update({ region: "us-east-1" });
const DynamoDB = new AWS.DynamoDB.DocumentClient();

module.exports = async (tableName, keyName, keyValue) => {
  console.log(`Executing delete in ${tableName}`);
  let key = {};
  key[keyName] = keyValue;

  const params = {
    TableName: tableName,
    Key: key,
  };

  return await new Promise((resolve, reject) => {
    DynamoDB.delete(params, (error, result) => {
      if (error) {
        console.error("DAO delete Error:", error);
        reject(error);
        return;
      }

      console.log("Deleted:", result);
      resolve({
        message: "Registro eliminado con éxito!",
      });
    });
  });
};
