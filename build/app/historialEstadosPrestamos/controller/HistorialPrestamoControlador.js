"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const HistorialPrestamoDAO_1 = __importDefault(require("../dao/HistorialPrestamoDAO"));
const HistorialPrestamo_1 = __importDefault(require("../entity/HistorialPrestamo"));
class HistorialPrestamoControlador extends HistorialPrestamoDAO_1.default {
    obtenerHistorialEstadosPrestamos(req, res) {
        HistorialPrestamoDAO_1.default.obtenerTodo(req.params, res);
    }
    agregarHistorialEstadoPrestamo(req, res) {
        const objHistorialEstadoPrestamo = new HistorialPrestamo_1.default(0, new Date(), 0, 0);
        const fechaCambioEstadoStr = req.body.fechaCambioEstado;
        const [dia, mes, anio] = fechaCambioEstadoStr.split('-');
        objHistorialEstadoPrestamo.fechaCambioEstado = new Date(`${anio}-${mes}-${dia}`);
        objHistorialEstadoPrestamo.idPrestamo = req.body.idPrestamo;
        objHistorialEstadoPrestamo.idEstado = req.body.idEstado;
        HistorialPrestamoDAO_1.default.agregar(objHistorialEstadoPrestamo, res);
    }
    borrarHistorialEstadoPrestamo(req, res) {
        if (isNaN(Number(req.params.idHistorialEstadoPrestamo))) {
            res.status(400).json({
                "mensaje": "El id del historial de estado del préstamo debe ser un número"
            });
        }
        else {
            const codigo = Number(req.params.idHistorialEstadoPrestamo);
            const objHistorialEstadoPrestamo = new HistorialPrestamo_1.default(codigo, new Date(), 0, 0);
            HistorialPrestamoDAO_1.default.borrar(objHistorialEstadoPrestamo, res);
        }
    }
    actualizarHistorialEstadoPrestamo(req, res) {
        const objHistorialEstadoPrestamo = new HistorialPrestamo_1.default(0, new Date(), 0, 0);
        objHistorialEstadoPrestamo.idHistorialEstadoPrestamo = Number(req.body.idHistorialEstadoPrestamo);
        const fechaCambioEstadoStr = req.body.fechaCambioEstado;
        const [dia, mes, anio] = fechaCambioEstadoStr.split('-');
        objHistorialEstadoPrestamo.fechaCambioEstado = new Date(`${anio}-${mes}-${dia}`);
        objHistorialEstadoPrestamo.idPrestamo = req.body.idPrestamo;
        objHistorialEstadoPrestamo.idEstado = req.body.idEstado;
        HistorialPrestamoDAO_1.default.actualizar(objHistorialEstadoPrestamo, res);
    }
}
const objHistorialPrestamoControlador = new HistorialPrestamoControlador();
exports.default = objHistorialPrestamoControlador;
