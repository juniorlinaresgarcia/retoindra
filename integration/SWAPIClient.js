var axios = require("axios");
const apiConstants = require("../common/constants/apiConstants");
const ErrorConstants = require("../common/constants/errorConstants");
const HttpConstants = require("../common/constants/httpConstants");
const messagesApi = require("../common/constants/messagesApi");
const BusinessError = require("../common/models/BusinessError");
var BASE_URL = HttpConstants.HTTPS + 'swapi.py4e.com/api';

var PATH_GET_PEOPLE = apiConstants.PATH_GET_PEOPLE;
var PATH_GET_PEOPLE_BY_ID = apiConstants.PATH_GET_PEOPLE_BY_ID;
class SWAPIClient {

    static async getAllPeople(){

        try {
            var config = {
                method: 'GET',
                url: BASE_URL+PATH_GET_PEOPLE,
                headers: {
                    'Content-Type': 'application/json'
                }
            };
            console.log('SWAPIClient->getAllPeople - config:',config);
    
            var response;
            await axios(config)
            .then((res) => {
                response = res.data;
            })
            .catch((error) => {
                console.error('Error consultando al servicio ' + PATH_GET_PEOPLE + ': ' + error);
                throw new BusinessError({
                    code: ErrorConstants.SERVICE_CONECTION_ERROR.code,
                    httpCode: HttpConstants.STATUS_INTERNAL_SERVER_ERROR.code,
                    messages: ErrorConstants.SERVICE_CONECTION_ERROR.message,
                });
            }); 
            console.log("response",response);
            return response;
        } catch (error) {
            
            console.log('Error en SWAPIClient - getAllPeople: ', error);  
            throw new BusinessError({
                code: ErrorConstants.SERVICE_CONECTION_ERROR.code,
                httpCode: HttpConstants.STATUS_INTERNAL_SERVER_ERROR.code,
                messages: ErrorConstants.SERVICE_CONECTION_ERROR.message,
            });
        }
    
    }

    static async getPeopleById(id){

        try {
            var config = {
                method: 'GET',
                url: BASE_URL+PATH_GET_PEOPLE_BY_ID+id,
                headers: {
                    'Content-Type': 'application/json'
                }
            };
    
            var response;
            await axios(config)
            .then((res) => {
                response = res;
                console.log('SWAPIClient->getPeopleById - res:',res);
                console.log('SWAPIClient->getPeopleById - response:',response);
            })
            .catch((error) => {
                console.error('Error consultando al servicio ' + PATH_GET_PEOPLE_BY_ID + ': ' +error);
                var httpCode = HttpConstants.STATUS_NOT_FOUND.code;
                var msg = messagesApi.MSG_ERROR_PEOPLE_NOT_FOUND;

                if(error.response.status && error.response.status != HttpConstants.STATUS_NOT_FOUND.code){
                    httpCode = HttpConstants.STATUS_INTERNAL_SERVER_ERROR.code;
                    msg = messagesApi.MSG_ERROR_GET_PEOPLE_BY_ID;
                }
                
                throw new BusinessError({
                    code: ErrorConstants.SERVICE_CONECTION_ERROR.code,
                    httpCode: httpCode,
                    messages: msg,
                });
            }); 

            console.log("response",response);
            return response;
        } catch (error) {
            console.log('Error en SWAPIClient - getAllPeople: ', error);  
            throw new BusinessError({
                code: error.code,
                httpCode: error.httpCode,
                messages: error.messages,
            });
        }
    
    }

}

module.exports = SWAPIClient;
