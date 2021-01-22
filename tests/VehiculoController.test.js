const BusinessError = require('../common/models/BusinessError');
const VehiculoController = require('../controllers/VehiculoController');
const VehiculoService = require('../services/VehiculoService');


describe('VehiculoController', () => {
    afterAll(() => {
        jest.restoreAllMocks();
    });

    test('_200 listarVehiculos con data', async () => {
        const fetchResultsSpy = jest.spyOn(VehiculoService, 'getAllVehicles').mockResolvedValueOnce(
            
            [
                {
                    "id": "584c471f-fa01-413e-a9f9-bee90bd29175",
                    "nombre": "Vehiculo 1",
                    "modelo": "modelo 1",
                    "claVehiculo": "Nave Espacial",
                    "longitud": "10",
                    "costoEnCreditos": 1000,
                    "tripulacion": 2,
                    "pasajeros": 3,
                    "velMaxAtmosfera": 240.5,
                    "capacidadCarga": 500,
                    "consumibles": "consumibles 1",
                    "peliculas": [],
                    "pilotos": [],
                    "url": "http://url_prueba/1",
                    "creado": "21/01/2021 14:46:03",
                    "actualizado": ""
                },
                {
                    "id": "acb5efb3-6247-4323-95a5-aa721ca42246",
                    "nombre": "Vehiculo 2",
                    "modelo": "modelo 2",
                    "claVehiculo": "Nave Espacial",
                    "longitud": "20",
                    "costoEnCreditos": 2000,
                    "tripulacion": 2,
                    "pasajeros": 3,
                    "velMaxAtmosfera": 240.5,
                    "capacidadCarga": 500,
                    "consumibles": "consumibles 2",
                    "peliculas": [],
                    "pilotos": [],
                    "url": "http://url_prueba/2",
                    "creado": "21/01/2021 14:20:39",
                    "actualizado": ""
                }
            ]
        );
        console.log('fetchResultsSpy',fetchResultsSpy);  
        const resp = await VehiculoController.listar();
        const body = JSON.parse(resp.body);
        const size = body.datos.length;
    
        expect(resp.statusCode).toBe(200);
        expect(size).toBe(2);
    });

});