const AwsUtils = require('../common/helpers/AwsUtils');
const VehiculoDb = require('../db/VehiculoDb');
const Vehiculo = require('../models/Vehiculo');
class VehiculoService {

    static async registerVehicle (event){
        var data = AwsUtils.getRequest(event);
        console.log("VehiculoService->registerVehicle - data",data);
        let result = await VehiculoDb.registerVehicle(data);
        console.log("VehiculoService->registerVehicle - result",result);
        return result;
    }

    static async getAllVehicles (){
        let data = await VehiculoDb.getAllVehicles();
        console.log("VehiculoService->getAllVehicles - data",data);
        var vehiculosEncontrados = [];
        if(data.Count > 0){
            var vehiculos = data.Items;
            vehiculos.forEach(function name(veh) {
                var vehiculo = new Vehiculo(veh);
                vehiculosEncontrados.push(vehiculo);
            });
        }
        return vehiculosEncontrados;
    }
}

module.exports = VehiculoService;