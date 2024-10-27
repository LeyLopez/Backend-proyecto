"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const GeneroControlador_1 = __importDefault(require("../controller/GeneroControlador"));
class GeneroRuta {
    constructor() {
        this.apiGeneroRuta = (0, express_1.Router)();
        this.misRutas();
    }
    misRutas() {
        this.apiGeneroRuta.get("/getall", GeneroControlador_1.default.obtenerGeneros);
        this.apiGeneroRuta.post("/add", GeneroControlador_1.default.agregarGenero);
        this.apiGeneroRuta.delete("/delete/:idGenero", GeneroControlador_1.default.borrarGenero);
        this.apiGeneroRuta.put("/update", GeneroControlador_1.default.actualizarGenero);
    }
}
const generoRuta = new GeneroRuta();
exports.default = generoRuta.apiGeneroRuta;
