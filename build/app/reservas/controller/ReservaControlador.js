"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ReservaDAO_1 = __importDefault(require("../dao/ReservaDAO"));
const Reserva_1 = __importDefault(require("../entity/Reserva"));
class ReservaControlador extends ReservaDAO_1.default {
    obtenerReservas(req, res) {
        ReservaDAO_1.default.obtenerTodo([], res);
    }
    agregarReserva(req, res) {
        const ObjReserva = new Reserva_1.default(0, new Date(), new Date(), 0, 0, 0);
        const fechaReservaStr = req.body.fechaReserva;
        const [diaR, mesR, anioR] = fechaReservaStr.split('-');
        ObjReserva.fechaReserva = new Date(`${anioR}-${mesR}-${diaR}`);
        const fechaFinReservaStr = req.body.fechaFinReserva;
        const [diaF, mesF, anioF] = fechaFinReservaStr.split('-');
        ObjReserva.fechaFinReserva = new Date(`${anioF}-${mesF}-${diaF}`);
        ObjReserva.idUsuario = req.body.idUsuario;
        ObjReserva.idLibro = req.body.idLibro;
        ObjReserva.idEstado = req.body.idEstado;
        ReservaDAO_1.default.agregar(ObjReserva, res);
    }
    borrarReserva(req, res) {
        if (isNaN(Number(req.params.idReserva))) {
            res.status(400).json({
                "mensaje": "El id de la reserva debe ser un número"
            });
        }
        else {
            const codigo = Number(req.params.idReserva);
            const ObjReserva = new Reserva_1.default(codigo, new Date(), new Date(), 0, 0, 0);
            ReservaDAO_1.default.borrar(ObjReserva, res);
        }
    }
    actualizarReserva(req, res) {
        const ObjReserva = new Reserva_1.default(0, new Date(), new Date(), 0, 0, 0);
        ObjReserva.idReserva = Number(req.body.idReserva);
        const fechaReservaStr = req.body.fechaReserva;
        const [diaR, mesR, anioR] = fechaReservaStr.split('-');
        ObjReserva.fechaReserva = new Date(`${anioR}-${mesR}-${diaR}`);
        const fechaFinReservaStr = req.body.fechaFinReserva;
        const [diaF, mesF, anioF] = fechaFinReservaStr.split('-');
        ObjReserva.fechaFinReserva = new Date(`${anioF}-${mesF}-${diaF}`);
        ObjReserva.idUsuario = req.body.idUsuario;
        ObjReserva.idLibro = req.body.idLibro;
        ObjReserva.idEstado = req.body.idEstado;
        ReservaDAO_1.default.actualizar(ObjReserva, res);
    }
}
const controladorReserva = new ReservaControlador();
exports.default = controladorReserva;
