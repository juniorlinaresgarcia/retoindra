
const Dynamo = require('../common/db/DynamoDatabase');
const BusinessError = require('../common/models/BusinessError');
const HttpConstants = require('../common/constants/httpConstants');
const ErrorConstants = require('../common/constants/errorConstants');
const Vehiculo = require('../models/Vehiculo');

const uuid = require('uuid');
const DateUtil = require('../common/helpers/DateUtil');

class VehiculoDB {

    static async registerVehicle(parameters) {

        try {
            parameters.id = uuid.v4();
            parameters.creado = DateUtil.getDateTimeNow();
            parameters.actualizado = '';

            const data = new Vehiculo(parameters);
            console.log('data', data);
            return await Dynamo.write(data, process.env.TAB_VEHICULO);

        } catch (error) {
            console.log('Error en VehiculoDb - registerVehicle: ', error);  
            throw new BusinessError({
                code: ErrorConstants.DB_ERROR.code,
                httpCode: HttpConstants.STATUS_INTERNAL_SERVER_ERROR.code,
                messages: ErrorConstants.DB_ERROR.message,
            });
        }
        
    }

    static async getAllVehicles() {
      
        try {
            return await Dynamo.getAll(process.env.TAB_VEHICULO);
        } catch (error) {
            console.log('Error en VehiculoDb - getAllVehicles: ', error);  
            throw new BusinessError({
                code: ErrorConstants.DB_ERROR.code,
                httpCode: HttpConstants.STATUS_INTERNAL_SERVER_ERROR.code,
                messages: ErrorConstants.DB_ERROR.message,
            });
        }
        
    }
}

module.exports = VehiculoDB;
