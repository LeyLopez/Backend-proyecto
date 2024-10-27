"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const EstadoControlador_1 = __importDefault(require("../controller/EstadoControlador"));
class EstadoRuta {
    constructor() {
        this.apiEstadoRuta = (0, express_1.Router)();
        this.misRutas();
    }
    misRutas() {
        this.apiEstadoRuta.get("/getall", EstadoControlador_1.default.obtenerEstados);
        this.apiEstadoRuta.post("/add", EstadoControlador_1.default.agregarEstado);
        this.apiEstadoRuta.delete("/delete/:idEstado", EstadoControlador_1.default.borrarEstado);
        this.apiEstadoRuta.put("/update", EstadoControlador_1.default.actualizarEstado);
    }
}
const estadoRuta = new EstadoRuta();
exports.default = estadoRuta.apiEstadoRuta;
