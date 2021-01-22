const swaggerUi = require('aws-serverless-swagger-ui');

exports.handler = async (event, context, callback) => {

    try {
        const swaggerHandler = swaggerUi.setup('./openapi.yml');
        console.log("swaggerHandler",swaggerHandler);
        return (await swaggerHandler)(event, context, callback);
    } catch (error) {
        console.log("error",error);
        return error;
    }
    
}