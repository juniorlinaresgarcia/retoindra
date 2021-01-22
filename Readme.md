Instalación
Para instalar los dependencias del proyecto, se debe dirigir a la raíz de la carpeta, e ingresar a la terminal de comandos y se ejecuta el script:
npm install

Después de la descarga e instalación de estas dependencias, se debe configurar las credenciales de AWS, para ello ejecutamos el siguiente comando:
serverless config credentials --provider aws --key {access-key} --secret {secret-key} --stage DEV

Finalmente, se deberá ejecutar el comando para deployar en la cuenta de Amazon:
sls deploy --stage DEV

Opcionalmente, si se desea ejecutar de manera local, se puede realizar mediante serverless-offline, para ello se ejecuta el comando:
sls offline start --stage DEV

OpenApi 
Para poder visualizar de forma gráfica los recursos del api, mediante Open Api 3.0, se deberá dirigir a esta url:
https://url-generada-en-deploy/DEV/docs/index.html

Tests
Para la ejecución de las pruebas unitarias se debe ejecutar el siguiente comando:
jest

Prueba de Api:
Para registrar un vehiculo se debe enviar un request con la siguiente forma:
Method: POST
Request (JSON):
{
    "nombre":"Vehiculo 1",
    "modelo":"modelo 1",
    "claVehiculo":"Nave Espacial",
    "longitud": 10,
    "costoEnCreditos": 1000,
    "tripulacion":  2,
    "pasajeros": 3,
    "velMaxAtmosfera": 240.50,
    "capacidadCarga": 500,
    "consumibles":"consumibles 1",
    "pilotos": ["piloto1"],
    "peliculas":["film1"],
    "url": "http://url_prueba/1"
}
URL: https://url-generada-en-deploy/DEV/vehiculo/registrar

Para visualizar los registros se debe con los siguientes parámetros: 
Method: GET
URL: https://url-generada-en-deploy/DEV/vehiculo/listar

Para visualizar las personas de acuerdo al api de Star Wars, se debe consultar con los siguientes parámetros:
Method: GET
URL: https://url-generada-en-deploy/DEV/persona/listar

Para visualizar las personas según su id, de acuerdo al api de Star Wars, se debe consultar con los siguientes parámetros:
Method: GET
URL: https://url-generada-en-deploy/DEV/persona/detalle/{id}


