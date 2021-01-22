Instalación
Para instalar los dependencias del proyecto, se debe dirigir a la raíz de la carpeta, e ingresar a la terminal de comandos y se ejecuta el script:
npm install

Después de la descarga e instalación de estas dependencias, se debe configurar las credenciales de AWS, para ello ejecutamos el siguiente comando:
serverless config credentials --provider aws --key {access-key} --secret {secret-key} --stage DEV

Finalmente, se deberá ejecutar el comando para deployar en la cuenta de Amazon:
sls deploy --stage DEV

Opcionalmente, si se desea ejecutar de manera local, se puede realizar mendiante serverless-offline, para ello se ejecuta el comando:
sls offline start --stage DEV

OpenApi 
Para poder visualizar de forma gráfica los recursos del api, mediante Open Api 3.0, se deberá dirigir a esta url:
https://url-generada-en-deploy/DEV/docs/index.html

Tests
Para la ejecucion de las pruebas unitarias se debe ejecutar el siguiente comando:
jest



