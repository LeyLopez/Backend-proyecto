"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const AutorControlador_1 = __importDefault(require("../controller/AutorControlador"));
class AutorRuta {
    constructor() {
        this.apiAutorRuta = (0, express_1.Router)();
        this.misRutas();
    }
    misRutas() {
        this.apiAutorRuta.get("/getall", AutorControlador_1.default.obtenerAutores);
        this.apiAutorRuta.post("/add", AutorControlador_1.default.agregarAutor);
        this.apiAutorRuta.delete("/delete/:idAutor", AutorControlador_1.default.borrarAutor);
        this.apiAutorRuta.put("/update", AutorControlador_1.default.actualizarAutor);
    }
}
const autorRuta = new AutorRuta();
exports.default = autorRuta.apiAutorRuta;
