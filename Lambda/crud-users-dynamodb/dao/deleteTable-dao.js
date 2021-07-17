const AWS = require("aws-sdk");
AWS.config.update({ region: "us-east-1" });

module.exports = async (tableName) => {
  console.log(`Executing deleteTable in ${tableName}`);
  const DynamoDB = new AWS.DynamoDB();
  const params = { TableName: tableName };

  return await new Promise((resolve, reject) => {
    DynamoDB.deleteTable(params, (error, result) => {
      if (error) {
        console.error("Dao deleteTable Error:", JSON.stringify(error, null, 2));
        reject({
          statusCode: 400,
          body: {
            message: "Ha ocurrido un error en la consulta.",
          },
        });
        return;
      }

      console.log("Table deleted:", result);
      resolve({
        message: "Tabla eliminada con éxito!",
        id: result.TableDescription.TableId,
      });
    });
  });
};
