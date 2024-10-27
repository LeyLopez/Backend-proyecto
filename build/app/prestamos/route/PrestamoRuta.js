"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const PrestamoControlador_1 = __importDefault(require("../controller/PrestamoControlador"));
class PrestamoRuta {
    constructor() {
        this.apiPrestamoRuta = (0, express_1.Router)();
        this.configuracion();
    }
    configuracion() {
        this.apiPrestamoRuta.get("/getall", PrestamoControlador_1.default.obtenerPrestamos);
        this.apiPrestamoRuta.post("/add", PrestamoControlador_1.default.agregarPrestamo);
        this.apiPrestamoRuta.delete("/delete/:idPrestamo", PrestamoControlador_1.default.borrarPrestamo);
        this.apiPrestamoRuta.put("/update", PrestamoControlador_1.default.actualizarPrestamo);
    }
}
const objPrestamoRuta = new PrestamoRuta();
exports.default = objPrestamoRuta.apiPrestamoRuta;
