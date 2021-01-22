class PersonaRes{

    constructor(resultData){
        this.nombre = resultData.name;
        this.anioNacimiento = resultData.birth_year;
        this.colorOjos = resultData.eye_color;
        this.genero = resultData.gender;
        this.colorCabello = resultData.hair_color;
        this.peso = resultData.height;
        this.masa = resultData.mass;
        this.colorPiel = resultData.skin_color ;
        this.peliculas = resultData.films;
        this.especies = resultData.species;
        this.especies = resultData.species;
        this.vehiculos = resultData.vehicles;
        this.url = resultData.url;
        this.creado = resultData.created;
        this.editado = resultData.edited ;
    }
}
module.exports = PersonaRes;