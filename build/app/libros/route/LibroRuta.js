"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const LibroControlador_1 = __importDefault(require("../controller/LibroControlador"));
class LibroRuta {
    constructor() {
        this.apiLibroRuta = (0, express_1.Router)();
        this.configuracion();
    }
    configuracion() {
        this.apiLibroRuta.get("/getall", LibroControlador_1.default.obtenerLibros);
        this.apiLibroRuta.post("/add", LibroControlador_1.default.agregarLibro);
        this.apiLibroRuta.delete("/delete/:idLibro", LibroControlador_1.default.borrarLibro);
        this.apiLibroRuta.put("/update", LibroControlador_1.default.actualizarLibro);
    }
}
const objLibroRuta = new LibroRuta();
exports.default = objLibroRuta.apiLibroRuta;
