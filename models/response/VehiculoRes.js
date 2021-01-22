class VehiculoRes {

    constructor (resultData){
        this.nombre = resultData.name;
        this.modelo = resultData.model;
        this.claseVehiculo = resultData.vehicle_class;
        this.fabricante = resultData.manufacturer;
        this.longitud = resultData.length;
        this.costoEnCreditos = resultData.cost_in_credits;
        this.tripulacion = resultData.crew;
        this.pasajeros = resultData.passengers;
        this.velMaxAtmosfera = resultData.max_atmosphering_speed;
        this.capacidadCarga = resultData.cargo_capacity;
        this.consumibles = resultData.consumables;
        this.peliculas = resultData.films;
        this.url = resultData.url;
    }
}

module.exports = VehiculoRes;