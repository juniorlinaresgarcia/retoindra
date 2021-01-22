const AwsUtils = require("../common/helpers/AwsUtils");
const VehiculoService = require("../services/VehiculoService");
const Messages = require("../common/constants/messagesApi"); 
const AppValidator = require("../common/validation/AppValidator");
const SchemaValidator = require('../validators/VehiculoValidator');

module.exports.listar = async (event, context, callback) => {

    try {
        var data = await VehiculoService.getAllVehicles();
        console.log('VehiculoController->listar - data',data);
        return AwsUtils.buildResponse(Messages.MSG_EXITO_GET_VEHICLES, data);
    } catch (error) {
        console.log('VehiculoController->listar - error',error);
        return AwsUtils.buildErrorResponse(event, error);
    }
    
}

module.exports.registrar = async (event, context, callback) => {

    try {
        await AppValidator.validateRequest(event, SchemaValidator.validateRegister());
        var result = await VehiculoService.registerVehicle(event);
        console.log('VehiculoController->listar - result',result);
        return AwsUtils.buildResponse(Messages.MSG_EXITO_REG_VEHICLES, null);
    } catch (error) {
        console.log('VehiculoController->listar - error',error);
        return AwsUtils.buildErrorResponse(event, error);
    }
    
}
