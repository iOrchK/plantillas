const AWS = require("aws-sdk");
AWS.config.update({ region: "us-east-1" });
const DynamoDB = new AWS.DynamoDB.DocumentClient();

module.exports = async (tableName, items) => {
  console.log(`Executing find in ${tableName}`);
  let expressionAttributeValues = {};
  let filterExpression = "";

  for (var prop in items) {
    // console.log("items", JSON.stringify(items[prop]));
    let items = items[prop];
    let titleObj = {};
    let titleKey = "";
    let index = 0;

    items.forEach(function (value) {
      index++;
      titleKey = ":" + prop + index;
      titleObj[titleKey.toString()] =
        isNaN(value) || typeof value === "boolean" ? value : Number(value);
    });

    Object.assign(expressionAttributeValues, titleObj);
    filterExpression +=
      prop + " in (" + Object.keys(titleObj).toString() + ") AND ";
  }

  console.log("expressionAttributeValues:", expressionAttributeValues);

  filterExpression = filterExpression.slice(0, filterExpression.length - 5);
  console.log("filterExpression:", filterExpression);

  let params = {
    TableName: tableName,
  };

  if (Object.keys(expressionAttributeValues).length > 0) {
    params.FilterExpression = filterExpression;
    params.ExpressionAttributeValues = expressionAttributeValues;
  }

  return await new Promise((resolve, reject) => {
    DynamoDB.scan(params, (error, result) => {
      if (error) {
        console.error("DAO find ERROR:", error);
        reject({
          statusCode: 400,
          body: {
            message: "Ha ocurrido un error en la consulta.",
          },
        });
        return;
      }

      if (result.Items) {
        console.log("Items found:", result);
        resolve(result.Items);
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
