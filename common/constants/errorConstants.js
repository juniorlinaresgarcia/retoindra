module.exports = {
  DATA_NOT_VALID: { code: 'DataNotValid' },
  PATH_NOT_VALID: { code: 'PathNotValid', message: 'El path no es válido'},
  HEADER_NOT_VALID: { code: 'HeaderNotValid', message: 'La cabecera de la solicitud no tiene el formato adecuado' },
  BODY_NOT_VALID: { code: 'BodyNotValid', message: 'El cuerpo de la solicitud no tiene el formato adecuado' },
  DB_ERROR: { code: 'DbError', message: 'Error en la db' },
  SERVICE_CONECTION_ERROR: { code: 'ServiceConectionError', message:'Error en el consumo del servicio' },
};
