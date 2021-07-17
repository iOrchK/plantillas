const AWS = require("aws-sdk");
AWS.config.update({ region: "us-east-1" });

module.exports = async (
  tableName,
  attributeName,
  readCapacityUnits,
  writeCapacityUnits
) => {
  console.log("Create table " + tableName);
  const DynamoDB = new AWS.DynamoDB();

  const params = {
    TableName: tableName,
    KeySchema: [
      { AttributeName: attributeName, KeyType: "HASH" }, //Partition key
    ],
    AttributeDefinitions: [
      { AttributeName: attributeName, AttributeType: "S" },
    ],
    ProvisionedThroughput: {
      ReadCapacityUnits: readCapacityUnits,
      WriteCapacityUnits: writeCapacityUnits,
    },
  };

  return await new Promise((resolve, reject) => {
    DynamoDB.createTable(params, (error, result) => {
      if (error) {
        console.error("Table Create Error:", JSON.stringify(error, null, 2));
        reject({
          statusCode: 400,
          body: {
            message: "Ha ocurrido un error en la consulta.",
          },
        });
      }

      console.log("Table created:", result);
      resolve({
        message: "Tabla creada con éxito!",
        id: result.TableDescription.TableId,
      });
    });
  });
};
