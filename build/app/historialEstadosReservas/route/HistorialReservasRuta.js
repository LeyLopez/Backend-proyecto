"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const HistorialReservasControlador_1 = __importDefault(require("../controller/HistorialReservasControlador"));
class HistorialReservasRuta {
    constructor() {
        this.apiHistorialReservasRuta = (0, express_1.Router)();
        this.configuracion();
    }
    configuracion() {
        this.apiHistorialReservasRuta.get("/getall", HistorialReservasControlador_1.default.obtenerHistorialEstadosReservas);
        this.apiHistorialReservasRuta.post("/add", HistorialReservasControlador_1.default.agregarHistorialEstadoReserva);
        this.apiHistorialReservasRuta.delete("/delete/:idHistorialEstadoReserva", HistorialReservasControlador_1.default.borrarHistorialEstadoReserva);
        this.apiHistorialReservasRuta.put("/update", HistorialReservasControlador_1.default.actualizarHistorialEstadoReserva);
    }
}
const historialReservasRuta = new HistorialReservasRuta();
exports.default = historialReservasRuta.apiHistorialReservasRuta;
