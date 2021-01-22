class Vehiculo {

    constructor (
        requestData
    ){
        this.id = requestData.id;
        this.nombre = requestData.nombre;
        this.modelo = requestData.modelo;
        this.claVehiculo = requestData.claVehiculo;
        this.longitud = requestData.longitud;
        this.costoEnCreditos = requestData.costoEnCreditos;
        this.tripulacion = requestData.tripulacion;
        this.pasajeros = requestData.pasajeros;
        this.velMaxAtmosfera = requestData.velMaxAtmosfera;
        this.capacidadCarga = requestData.capacidadCarga;
        this.consumibles = requestData.consumibles;
        this.peliculas = requestData.peliculas;
        this.pilotos = requestData.pilotos;
        this.url = requestData.url;
        this.creado = requestData.creado;
        this.actualizado = requestData.actualizado;
    }

}

module.exports = Vehiculo;