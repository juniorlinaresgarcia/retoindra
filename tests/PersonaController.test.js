const { object } = require('joi');
const ErrorConstants = require('../common/constants/errorConstants');
const httpConstants = require('../common/constants/httpConstants');
const messagesApi = require('../common/constants/messagesApi');
const AwsUtils = require('../common/helpers/AwsUtils');
const BusinessError = require('../common/models/BusinessError');
const PersonaController = require('../controllers/PersonaController');
const PersonaService = require('../services/PersonaService');

var EVENT_GET_PEOPLE_BY_ID_OK = {
  resource: '/persona/detalle/{id}',
  path: '/persona/detalle/1',
  httpMethod: 'GET',
  headers: {
    Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
    'X-Forwarded-Port': '443',
    'X-Forwarded-Proto': 'https'
  },
  pathParameters: { id: '1' },
  body: null
};

var EVENT_GET_PEOPLE_BY_ID_NOT_FOUND = {
  resource: '/persona/detalle/{id}',
  path: '/persona/detalle/1000',
  httpMethod: 'GET',
  headers: {
    Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
    'X-Forwarded-Port': '443',
    'X-Forwarded-Proto': 'https'
  },
  pathParameters: { id: '1000' },
  body: null
};

describe('PersonaController', () => {
  
  afterAll(() => {
    jest.restoreAllMocks();
  });

  test('_200 listarPersonas con data', async () => {
    const fetchResultsSpy = jest.spyOn(PersonaService, 'getPeople').mockResolvedValueOnce(
      [
        {
            "nombre":"Luke Skywalker",
            "anioNacimiento":"19BBY",
            "colorOjos":"blue",
            "genero":"male",
            "colorCabello":"blond",
            "peso":"172",
            "masa":"77",
            "colorPiel":"fair",
            "peliculas":[
              "https://swapi.py4e.com/api/films/1/",
              "https://swapi.py4e.com/api/films/2/",
              "https://swapi.py4e.com/api/films/3/",
              "https://swapi.py4e.com/api/films/6/",
              "https://swapi.py4e.com/api/films/7/"
            ],
            "especies":[
              "https://swapi.py4e.com/api/species/1/"
            ],
            "vehiculos":[
              "https://swapi.py4e.com/api/vehicles/14/",
              "https://swapi.py4e.com/api/vehicles/30/"
            ],
            "url":"https://swapi.py4e.com/api/people/1/",
            "creado":"2014-12-09T13:50:51.644000Z",
            "editado":"2014-12-20T21:17:56.891000Z"
        },
        {
            "nombre":"C-3PO",
            "anioNacimiento":"112BBY",
            "colorOjos":"yellow",
            "genero":"n/a",
            "colorCabello":"n/a",
            "peso":"167",
            "masa":"75",
            "colorPiel":"gold",
            "peliculas":[
              "https://swapi.py4e.com/api/films/1/",
              "https://swapi.py4e.com/api/films/2/",
              "https://swapi.py4e.com/api/films/3/",
              "https://swapi.py4e.com/api/films/4/",
              "https://swapi.py4e.com/api/films/5/",
              "https://swapi.py4e.com/api/films/6/"
            ],
            "especies":[
              "https://swapi.py4e.com/api/species/2/"
            ],
            "vehiculos":[
              
            ],
            "url":"https://swapi.py4e.com/api/people/2/",
            "creado":"2014-12-10T15:10:51.357000Z",
            "editado":"2014-12-20T21:17:50.309000Z"
        }
      ]
    );
    console.log('fetchResultsSpy',fetchResultsSpy);  
    
    const resp = await PersonaController.listar();
    const body = JSON.parse(resp.body);
    const size = body.datos.length;

    expect(resp.statusCode).toBe(200);
    expect(size).toBe(2);
  });

  test('_200 listarPersonas sin data', async () => {
    const fetchResultsSpy = jest.spyOn(PersonaService, 'getPeople').mockResolvedValueOnce([]);
    console.log('fetchResultsSpy',fetchResultsSpy);  
    const resp = await PersonaController.listar();
    const body = JSON.parse(resp.body);
    const size = body.datos.length;

    expect(resp.statusCode).toBe(200);
    expect(size).toBe(0);
  });

  test('_500 listarPersonas error en el servicio', async () => {
    const fetchResultsSpy = jest.spyOn(PersonaService, 'getPeople').mockRejectedValueOnce(
      new BusinessError({
        code: ErrorConstants.SERVICE_CONECTION_ERROR.code,
        httpCode: httpConstants.STATUS_INTERNAL_SERVER_ERROR.code,
        messages: ErrorConstants.SERVICE_CONECTION_ERROR.message,
      })
    );
    console.log('fetchResultsSpy',fetchResultsSpy);  
    const resp = await PersonaController.listar();
    const body = JSON.parse(resp.body);
    console.log('body',body);  
    expect(resp.statusCode).toBe(500);
    expect(body.datos).toBe(null);
  });


  test('_200 listarPersonasPorId con id 1', async () => {
    const fetchResultsSpy = jest.spyOn(PersonaService, 'getPeopleById').mockResolvedValueOnce(
      {
        "persona": {
            "nombre": "ssss Skywalker",
            "anioNacimiento": "19BBY",
            "colorOjos": "blue",
            "genero": "male",
            "colorCabello": "blond",
            "peso": "172",
            "masa": "77",
            "colorPiel": "fair",
            "peliculas": [
                "https://swapi.py4e.com/api/films/1/",
                "https://swapi.py4e.com/api/films/2/",
                "https://swapi.py4e.com/api/films/3/",
                "https://swapi.py4e.com/api/films/6/",
                "https://swapi.py4e.com/api/films/7/"
            ],
            "especies": [
                "https://swapi.py4e.com/api/species/1/"
            ],
            "vehiculos": [
                "https://swapi.py4e.com/api/vehicles/14/",
                "https://swapi.py4e.com/api/vehicles/30/"
            ],
            "url": "https://swapi.py4e.com/api/people/1/",
            "creado": "2014-12-09T13:50:51.644000Z",
            "editado": "2014-12-20T21:17:56.891000Z"
        }
      }
    );
    console.log('fetchResultsSpy',fetchResultsSpy);  
    const resp = await PersonaController.listarPorId(EVENT_GET_PEOPLE_BY_ID_OK);
    const body = JSON.parse(resp.body);

    console.log('body',body);
    expect(resp.statusCode).toBe(200);
    expect(typeof body.datos.persona).toMatch('object');
  });

  test('404 listarPersonasPorId con id no encontrado(1000)', async () => {
    const fetchResultsSpy = jest.spyOn(PersonaService, 'getPeopleById').mockRejectedValueOnce(
      new BusinessError({
        code: ErrorConstants.SERVICE_CONECTION_ERROR.code,
        httpCode: httpConstants.STATUS_NOT_FOUND.code,
        messages: messagesApi.MSG_ERROR_PEOPLE_NOT_FOUND,
      })
    );
    console.log('fetchResultsSpy',fetchResultsSpy);  
    const resp = await PersonaController.listarPorId(EVENT_GET_PEOPLE_BY_ID_NOT_FOUND);
    const body = JSON.parse(resp.body);

    console.log('body',body);
    expect(resp.statusCode).toBe(404);
    expect(body.codMensaje).toBe(-1);
  });

});
