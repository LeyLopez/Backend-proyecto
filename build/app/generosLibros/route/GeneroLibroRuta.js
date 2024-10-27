"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const GeneroLibroControlador_1 = __importDefault(require("../controller/GeneroLibroControlador"));
class GeneroLibroRuta {
    constructor() {
        this.apiGeneroLibroRuta = (0, express_1.Router)();
        this.misRutas();
    }
    misRutas() {
        this.apiGeneroLibroRuta.get("/getall", GeneroLibroControlador_1.default.obtenerGenerosLibros);
    }
}
const generoLibroRuta = new GeneroLibroRuta();
exports.default = generoLibroRuta.apiGeneroLibroRuta;
