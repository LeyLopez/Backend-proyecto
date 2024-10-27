class Libro{
    idLibro : number;
    tituloLibro : string;
    resumenLibro: string;
    urlPortadaLibro: string;
    tipoLibro: string;
    fechaPublicacion: Date;
    cantidadEjemplares: number;
    idAutor: number;


    constructor(idLibro: number, tituloLibro: string, resumenLibro: string, urlPortadaLibro: string, tipoLibro: string, fechaPublicacion: Date, cantidadEjemplares: number, idAutor: number){
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