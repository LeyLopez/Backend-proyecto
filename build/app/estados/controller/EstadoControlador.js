"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Estado_1 = __importDefault(require("../entity/Estado"));
const EstadoDAO_1 = __importDefault(require("../dao/EstadoDAO"));
class EstadoControlador extends EstadoDAO_1.default {
    obtenerEstados(req, res) {
        EstadoDAO_1.default.obtenerTodo([], res);
    }
    agregarEstado(req, res) {
        const objEstado = new Estado_1.default(0, "", "");
        objEstado.nombreEstado = req.body.nombreEstado;
        objEstado.descripcionEstado = req.body.descripcionEstado;
        EstadoDAO_1.default.agregar(objEstado, res);
    }
    borrarEstado(req, res) {
        if (isNaN(Number(req.params.idEstado))) {
            res.status(400).json({
                "mensaje": "El id del estado debe ser un número"
            });
        }
        else {
            const codigo = Number(req.params.idEstado);
            const objEstado = new Estado_1.default(codigo, "", "");
            EstadoDAO_1.default.borrar(objEstado, res);
        }
    }
    actualizarEstado(req, res) {
        const objEstado = new Estado_1.default(0, "", "");
        objEstado.idEstado = Number(req.body.idEstado);
        objEstado.nombreEstado = req.body.nombreEstado;
        objEstado.descripcionEstado = req.body.descripcionEstado;
        EstadoDAO_1.default.actualizar(objEstado, res);
    }
}
const estadoControlador = new EstadoControlador();
exports.default = estadoControlador;
