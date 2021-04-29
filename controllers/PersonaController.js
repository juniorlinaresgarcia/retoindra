const AwsUtils = require("../common/helpers/AwsUtils");
const PersonaService = require("../services/PersonaService");
const Messages = require("../common/constants/messagesApi"); 
//commit a pasar a master
module.exports.listar = async (event, context, callback) => {

    try {
        var data = await PersonaService.getPeople();
        //console.log('PersonaController->listar - data',data);
        //callback(null, AwsUtils.buildResponse(Messages.MSG_EXITO_GET_PEOPLE, data));
        return AwsUtils.buildResponse(Messages.MSG_EXITO_GET_PEOPLE, data);
    } catch (error) {
        console.log('PersonaController->listar - error',error);
        return AwsUtils.buildErrorResponse(event, error);
    }
    
}
//comentario 2
module.exports.listarPorId = async (event, context, callback) => {
//comentario master 2
    try {
        console.log('event1',event);
        var data = await PersonaService.getPeopleById(event);
        console.log('PersonaController->listarPorId - data',data);
        return AwsUtils.buildResponse(Messages.MSG_EXITO_GET_PEOPLE_BY_ID, data);
    } catch (error) {
        console.log('PersonaController->listarPorId - error',error);
        return AwsUtils.buildErrorResponse(event, error);
    }
}
