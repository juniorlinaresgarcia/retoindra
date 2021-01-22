const joi = require('joi');

class VehiculoValidator {

    static validateRegister() {
        const schema = joi.object().keys({
            nombre : joi.string().min(1).required(),
            modelo : joi.string().min(1).required(),
            claVehiculo: joi.string().min(1).max(150).required(),
            longitud: joi.number().min(1).required(),

            costoEnCreditos: joi.number().integer().min(1).required(),
            tripulacion: joi.number().integer().min(1).required(),
            pasajeros: joi.number().integer().min(1).required(),

            velMaxAtmosfera: joi.number().min(1).required(),
            capacidadCarga: joi.number().min(1).required(),
            consumibles: joi.string().empty('').required(),

            peliculas: joi.array().items(joi.string()).required(),
            pilotos: joi.array().items(joi.string()).required(),
            url: joi.string().empty('').required()
            
        }).required();
        return schema;
    }

}

module.exports = VehiculoValidator;