"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Libro_1 = __importDefault(require("../entity/Libro"));
const LibroDAO_1 = __importDefault(require("../dao/LibroDAO"));
class LibroControlador extends LibroDAO_1.default {
    obtenerLibros(req, res) {
        LibroDAO_1.default.obtenerTodo([], res);
    }
    agregarLibro(req, res) {
        const objLibro = new Libro_1.default(0, "", "", "", "", new Date(), 0, 0);
        objLibro.tituloLibro = req.body.tituloLibro;
        objLibro.resumenLibro = req.body.resumenLibro;
        objLibro.urlPortadaLibro = req.body.urlPortadaLibro;
        objLibro.tipoLibro = req.body.tipoLibro;
        const fechaPubStr = req.body.fechaPublicacion;
        const [dia, mes, anio] = fechaPubStr.split('-');
        objLibro.fechaPublicacion = new Date(`${anio}-${mes}-${dia}`); // Formato YYYY-MM-DD
        objLibro.cantidadEjemplares = req.body.cantidadEjemplares;
        objLibro.idAutor = req.body.idAutor;
        LibroDAO_1.default.agregar(objLibro, res);
    }
    borrarLibro(req, res) {
        if (isNaN(Number(req.params.idLibro))) {
            res.status(400).json({
                "mensaje": "El id del libro debe ser un número"
            });
        }
        else {
            const codigo = Number(req.params.idLibro);
            const objLibro = new Libro_1.default(codigo, "", "", "", "", new Date(), 0, 0);
            LibroDAO_1.default.borrar(objLibro, res);
        }
    }
    actualizarLibro(req, res) {
        const objLibro = new Libro_1.default(0, "", "", "", "", new Date(), 0, 0);
        objLibro.idLibro = Number(req.body.idLibro);
        objLibro.tituloLibro = req.body.tituloLibro;
        objLibro.resumenLibro = req.body.resumenLibro;
        objLibro.urlPortadaLibro = req.body.urlPortadaLibro;
        objLibro.tipoLibro = req.body.tipoLibro;
        const fechaPubStr = req.body.fechaPublicacion;
        const [dia, mes, anio] = fechaPubStr.split('-');
        objLibro.fechaPublicacion = new Date(`${anio}-${mes}-${dia}`);
        objLibro.cantidadEjemplares = req.body.cantidadEjemplares;
        objLibro.idAutor = req.body.idAutor;
        LibroDAO_1.default.actualizar(objLibro, res);
    }
}
const libroControlador = new LibroControlador();
exports.default = libroControlador;
