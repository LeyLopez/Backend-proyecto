"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const GeneroLibroDAO_1 = __importDefault(require("../dao/GeneroLibroDAO"));
class GeneroLibroControlador extends GeneroLibroDAO_1.default {
    obtenerGenerosLibros(req, res) {
        GeneroLibroDAO_1.default.obtenerTodo([], res);
    }
}
const generoLibroControlador = new GeneroLibroControlador();
exports.default = generoLibroControlador;
