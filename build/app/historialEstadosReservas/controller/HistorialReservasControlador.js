"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const HistorialReservasDAO_1 = __importDefault(require("../dao/HistorialReservasDAO"));
const HistorialReserva_1 = __importDefault(require("../entity/HistorialReserva"));
class HistorialReservasControlador extends HistorialReservasDAO_1.default {
    obtenerHistorialEstadosReservas(req, res) {
        HistorialReservasDAO_1.default.obtenerTodo(req.params, res);
    }
    agregarHistorialEstadoReserva(req, res) {
        const objHistorialEstadoReserva = new HistorialReserva_1.default(0, new Date(), 0, 0);
        const fechaCambioEstadoStr = req.body.fechaCambioEstado;
        const [dia, mes, anio] = fechaCambioEstadoStr.split('-');
        objHistorialEstadoReserva.fechaCambioEstado = new Date(`${anio}-${mes}-${dia}`);
        objHistorialEstadoReserva.idReserva = req.body.idReserva;
        objHistorialEstadoReserva.idEstado = req.body.idEstado;
        HistorialReservasDAO_1.default.agregar(objHistorialEstadoReserva, res);
    }
    borrarHistorialEstadoReserva(req, res) {
        if (isNaN(Number(req.params.idHistorialEstadoReserva))) {
            res.status(400).json({
                "mensaje": "El id del historial de estado de la reserva debe ser un número"
            });
        }
        else {
            const codigo = Number(req.params.idHistorialEstadoReserva);
            const objHistorialEstadoReserva = new HistorialReserva_1.default(codigo, new Date(), 0, 0);
            HistorialReservasDAO_1.default.borrar(objHistorialEstadoReserva, res);
        }
    }
    actualizarHistorialEstadoReserva(req, res) {
        const objHistorialEstadoReserva = new HistorialReserva_1.default(0, new Date(), 0, 0);
        objHistorialEstadoReserva.idHistorialEstadoReserva = Number(req.body.idHistorialEstadoReserva);
        const fechaCambioEstadoStr = req.body.fechaCambioEstado;
        const [dia, mes, anio] = fechaCambioEstadoStr.split('-');
        objHistorialEstadoReserva.fechaCambioEstado = new Date(`${anio}-${mes}-${dia}`);
        objHistorialEstadoReserva.idReserva = req.body.idReserva;
        objHistorialEstadoReserva.idEstado = req.body.idEstado;
        HistorialReservasDAO_1.default.actualizar(objHistorialEstadoReserva, res);
    }
}
const objHistorialReservasControlador = new HistorialReservasControlador();
exports.default = objHistorialReservasControlador;
