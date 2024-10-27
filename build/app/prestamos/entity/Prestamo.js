"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Prestamo {
    constructor(idPrestamo, fechaPrestamo, fechaDevolucion, idUsuario, idLibro, idEstado) {
        this.idPrestamo = idPrestamo;
        this.fechaPrestamo = fechaPrestamo;
        this.fechaDevolucion = fechaDevolucion;
        this.idUsuario = idUsuario;
        this.idLibro = idLibro;
        this.idEstado = idEstado;
    }
}
exports.default = Prestamo;
