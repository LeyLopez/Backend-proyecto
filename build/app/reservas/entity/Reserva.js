"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Reserva {
    constructor(idReserva, fechaReserva, fechaFinReserva, idUsuario, idLibro, idEstado) {
        this.idReserva = idReserva;
        this.fechaReserva = fechaReserva;
        this.fechaFinReserva = fechaFinReserva;
        this.idUsuario = idUsuario;
        this.idLibro = idLibro;
        this.idEstado = idEstado;
    }
}
exports.default = Reserva;
