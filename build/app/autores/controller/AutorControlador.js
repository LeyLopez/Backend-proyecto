"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AutorDAO_1 = __importDefault(require("../dao/AutorDAO"));
class AutorControlador extends AutorDAO_1.default {
    obtenerAutores(req, res) {
        AutorDAO_1.default.obtenerTodo([], res);
    }
}
const autorControlador = new AutorControlador();
exports.default = autorControlador;
