class Libro{
    idLibro : Number;
    tituloLibro : string;
    resumenLibro: string;
    urlPortadaLibro: string;
    tipoLibro: string;
    fechaPublicacion: Date;
    cantidadEjemplares: Number;
    idAutor: Number;


    constructor(idLibro: Number, tituloLibro: string, resumenLibro: string, urlPortadaLibro: string, tipoLibro: string, fechaPublicacion: Date, cantidadEjemplares: Number, idAutor: Number){
        this.idLibro = idLibro;
        this.tituloLibro = tituloLibro;
        this.resumenLibro = resumenLibro;
        this.urlPortadaLibro = urlPortadaLibro;
        this.tipoLibro = tipoLibro;
        this.fechaPublicacion = fechaPublicacion;
        this.cantidadEjemplares = cantidadEjemplares;
        this.idAutor = idAutor;
    }



}

export default Libro;