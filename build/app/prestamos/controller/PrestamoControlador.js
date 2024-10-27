"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const PrestamoDAO_1 = __importDefault(require("../dao/PrestamoDAO"));
const Prestamo_1 = __importDefault(require("../entity/Prestamo"));
class PrestamoControlador extends PrestamoDAO_1.default {
    obtenerPrestamos(req, res) {
        PrestamoDAO_1.default.obtenerTodo([], res);
    }
    agregarPrestamo(req, res) {
        const ObjPrestamo = new Prestamo_1.default(0, new Date(), new Date(), 0, 0, 0);
        const fechaPrestamoStr = req.body.fechaPrestamo;
        const [diaP, mesP, anioP] = fechaPrestamoStr.split('-');
        ObjPrestamo.fechaPrestamo = new Date(`${anioP}-${mesP}-${diaP}`);
        const fechaDevolucionStr = req.body.fechaDevolucion;
        const [diaD, mesD, anioD] = fechaDevolucionStr.split('-');
        ObjPrestamo.fechaDevolucion = new Date(`${anioD}-${mesD}-${diaD}`);
        ObjPrestamo.idUsuario = req.body.idUsuario;
        ObjPrestamo.idLibro = req.body.idLibro;
        ObjPrestamo.idEstado = req.body.idEstado;
        PrestamoDAO_1.default.agregar(ObjPrestamo, res);
    }
    borrarPrestamo(req, res) {
        if (isNaN(Number(req.params.idPrestamo))) {
            res.status(400).json({
                "mensaje": "El id del prestamo debe ser un número"
            });
        }
        else {
            const codigo = Number(req.params.idPrestamo);
            const ObjPrestamo = new Prestamo_1.default(codigo, new Date(), new Date(), 0, 0, 0);
            PrestamoDAO_1.default.borrar(ObjPrestamo, res);
        }
    }
    actualizarPrestamo(req, res) {
        const ObjPrestamo = new Prestamo_1.default(0, new Date(), new Date(), 0, 0, 0);
        ObjPrestamo.idPrestamo = Number(req.body.idPrestamo);
        const fechaPrestamoStr = req.body.fechaPrestamo;
        const [diaP, mesP, anioP] = fechaPrestamoStr.split('-');
        ObjPrestamo.fechaPrestamo = new Date(`${anioP}-${mesP}-${diaP}`);
        const fechaDevolucionStr = req.body.fechaDevolucion;
        const [diaD, mesD, anioD] = fechaDevolucionStr.split('-');
        ObjPrestamo.fechaDevolucion = new Date(`${anioD}-${mesD}-${diaD}`);
        ObjPrestamo.idUsuario = req.body.idUsuario;
        ObjPrestamo.idLibro = req.body.idLibro;
        ObjPrestamo.idEstado = req.body.idEstado;
        PrestamoDAO_1.default.actualizar(ObjPrestamo, res);
    }
}
const objPrestamoControlador = new PrestamoControlador();
exports.default = objPrestamoControlador;
