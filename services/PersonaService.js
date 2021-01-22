const AwsUtils = require('../common/helpers/AwsUtils');
const SWAPIClient = require('../integration/SWAPIClient');
const PersonaRes = require('../models/response/PersonaRes');
const HttpConstants = require('../common/constants/httpConstants');
const ErrorConstants = require('../common/constants/errorConstants');
const BusinessError = require('../common/models/BusinessError');

class PersonaService {

    static async getPeople() {

        let data = await SWAPIClient.getAllPeople();
        //console.log('PersonaService - getPeople: Data ',data);

        var personasEncontradas = [];
        if(data.results){
            var personas = data.results;

            personas.forEach(function name(per) {
                var persona = new PersonaRes(per);
                personasEncontradas.push(persona);
            });
        }
        
        return personasEncontradas;
    }

    static async getPeopleById(event) {

        var req = AwsUtils.getPathParameters(event);
        console.log('PersonaService - getPeopleById: req ',req);
        console.log('PersonaService - getPeopleById: isNaN ', isNaN(req.id));
        if(isNaN(req.id)){
            throw new BusinessError({
                code: ErrorConstants.PATH_NOT_VALID.code,
                httpCode: HttpConstants.STATUS_BAD_REQUEST.code,
                messages: ErrorConstants.PATH_NOT_VALID.message
            });
        }
        let res = await SWAPIClient.getPeopleById(req.id);
        console.log('PersonaService - getPeopleById: Data ',res);

        var personaEncontrada = {};
        if(res.status){
            personaEncontrada = {
                persona: new PersonaRes(res.data)
            }; 
        }
        return personaEncontrada;
    }
}
module.exports = PersonaService;