"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Libro {
    constructor(idLibro, tituloLibro, resumenLibro, urlPortadaLibro, tipoLibro, fechaPublicacion, cantidadEjemplares, idAutor) {
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
exports.default = Libro;
