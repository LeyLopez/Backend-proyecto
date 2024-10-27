"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Genero_1 = __importDefault(require("../entity/Genero"));
const GeneroDAO_1 = __importDefault(require("../dao/GeneroDAO"));
class GeneroControlador extends GeneroDAO_1.default {
    obtenerGeneros(req, res) {
        GeneroDAO_1.default.obtenerTodo([], res);
    }
    agregarGenero(req, res) {
        const objGenero = new Genero_1.default(0, "");
        objGenero.nombreGenero = req.body.nombreGenero;
        GeneroDAO_1.default.agregar(objGenero, res);
    }
    borrarGenero(req, res) {
        if (isNaN(Number(req.params.idGenero))) {
            res.status(400).json({
                "mensaje": "El id del género debe ser un número"
            });
        }
        else {
            const codigo = Number(req.params.idGenero);
            const objGenero = new Genero_1.default(codigo, "");
            GeneroDAO_1.default.borrar(objGenero, res);
        }
    }
    actualizarGenero(req, res) {
        const objGenero = new Genero_1.default(0, "");
        objGenero.idGenero = Number(req.body.idGenero);
        objGenero.nombreGenero = req.body.nombreGenero;
        GeneroDAO_1.default.actualizar(objGenero, res);
    }
}
const generoControlador = new GeneroControlador();
exports.default = generoControlador;
