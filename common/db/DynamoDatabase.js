const AWS = require('aws-sdk');
const documentClient = new AWS.DynamoDB.DocumentClient({
    region: process.env.REGION
});
const Dynamo = {
    async getAll(tableName) {
        const params = {
            TableName: tableName
        };

        const data = await documentClient.scan(params).promise();
        console.log('DynamoDB data:',data);

        if (!data) {
            throw Error(`Ocurrió un error obteniendo los datos de la tabla ${TableName}`);
        }
        return data;
    },

    async get(id, TableName) {
        const params = {
            TableName,
            Key: {
                id,
            },
        };

        const data = await documentClient.get(params).promise();
        console.log(data);

        if (!data || !data.Item) {
            throw Error(`Ocurrió un error obteniendo la data para el id ${ID} de la tabla ${TableName}`);
        }
        
        return data.Item;
    },

    async write(data, TableName) {
        if (!data.id) {
            throw Error('Id no ingresado');
        }

        const params = {
            TableName,
            Item: data,
        };

        const res = await documentClient.put(params).promise();
        console.log(res);

        if (!res) {
            throw Error(`Ocurrió un error insertando el id ${data.id} en la tabla ${TableName}`);
        }

        return data;
    },

    async delete(id, TableName) {
        const params = {
            TableName,
            Key: {
                id,
            },
        };

        return documentClient.delete(params).promise();
    },
};
module.exports = Dynamo;
