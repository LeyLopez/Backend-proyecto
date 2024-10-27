"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class HistorialPrestamo {
    constructor(idHistorialEstadoPrestamo, fechaCambioEstado, idPrestamo, idEstado) {
        this.idHistorialEstadoPrestamo = idHistorialEstadoPrestamo;
        this.fechaCambioEstado = fechaCambioEstado;
        this.idPrestamo = idPrestamo;
        this.idEstado = idEstado;
    }
}
exports.default = HistorialPrestamo;
