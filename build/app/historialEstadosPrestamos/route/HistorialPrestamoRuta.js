"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const HistorialPrestamoControlador_1 = __importDefault(require("../controller/HistorialPrestamoControlador"));
class HistorialPrestamoRuta {
    constructor() {
        this.apiHistorialPrestamo = (0, express_1.Router)();
        this.configurarRuta();
    }
    configurarRuta() {
        this.apiHistorialPrestamo.get("/getall", HistorialPrestamoControlador_1.default.obtenerHistorialEstadosPrestamos);
        this.apiHistorialPrestamo.post("/add", HistorialPrestamoControlador_1.default.agregarHistorialEstadoPrestamo);
        this.apiHistorialPrestamo.delete("/delete/:idHistorialEstadoPrestamo", HistorialPrestamoControlador_1.default.borrarHistorialEstadoPrestamo);
        this.apiHistorialPrestamo.put("/update", HistorialPrestamoControlador_1.default.actualizarHistorialEstadoPrestamo);
    }
}
const objHistorialPrestamoRuta = new HistorialPrestamoRuta();
exports.default = objHistorialPrestamoRuta.apiHistorialPrestamo;
