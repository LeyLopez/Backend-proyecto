"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Autor_1 = __importDefault(require("../entity/Autor"));
const AutorDAO_1 = __importDefault(require("../dao/AutorDAO"));
class AutorControlador extends AutorDAO_1.default {
    obtenerAutores(req, res) {
        AutorDAO_1.default.obtenerTodo([], res);
    }
    agregarAutor(req, res) {
        const objAutor = new Autor_1.default(0, "", "", new Date());
        objAutor.nombreAutor = req.body.nombreAutor;
        objAutor.apellidoAutor = req.body.apellidoAutor;
        // Convertir la fecha en formato ISO
        const fechaNacStr = req.body.fechaNacimiento;
        const [dia, mes, anio] = fechaNacStr.split('-');
        objAutor.fechaNacimiento = new Date(`${anio}-${mes}-${dia}`); // Formato YYYY-MM-DD
        AutorDAO_1.default.agregar(objAutor, res);
    }
    borrarAutor(req, res) {
        if (isNaN(Number(req.params.idAutor))) {
            res.status(400).json({
                "mensaje": "El id del autor debe ser un número"
            });
        }
        else {
            const codigo = Number(req.params.idAutor);
            const objAutor = new Autor_1.default(codigo, "", "", new Date());
            AutorDAO_1.default.borrarAutor(objAutor, res);
        }
    }
    actualizarAutor(req, res) {
        const objAutor = new Autor_1.default(0, "", "", new Date());
        objAutor.idAutor = Number(req.body.idAutor);
        objAutor.nombreAutor = req.body.nombreAutor;
        objAutor.apellidoAutor = req.body.apellidoAutor;
        const fechaNacStr = req.body.fechaNacimiento;
        const [dia, mes, anio] = fechaNacStr.split('-');
        objAutor.fechaNacimiento = new Date(`${anio}-${mes}-${dia}`);
        AutorDAO_1.default.actualizar(objAutor, res);
    }
}
const autorControlador = new AutorControlador();
exports.default = autorControlador;
