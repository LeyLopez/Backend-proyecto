"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ReservaControlador_1 = __importDefault(require("../controller/ReservaControlador"));
class ReservaRuta {
    constructor() {
        this.apiReservaRuta = (0, express_1.Router)();
        this.configuracion();
    }
    configuracion() {
        this.apiReservaRuta.get("/getall", ReservaControlador_1.default.obtenerReservas);
        this.apiReservaRuta.post("/add", ReservaControlador_1.default.agregarReserva);
        this.apiReservaRuta.delete("/delete/:idReserva", ReservaControlador_1.default.borrarReserva);
        this.apiReservaRuta.put("/update", ReservaControlador_1.default.actualizarReserva);
    }
}
const reservaRuta = new ReservaRuta();
exports.default = reservaRuta.apiReservaRuta;
