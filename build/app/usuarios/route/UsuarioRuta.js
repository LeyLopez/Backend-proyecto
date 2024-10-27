"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UsuarioControlador_1 = __importDefault(require("../controller/UsuarioControlador"));
class UsuarioRuta {
    constructor() {
        this.apiUsuarioRuta = (0, express_1.Router)();
        this.configuracion();
    }
    configuracion() {
        this.apiUsuarioRuta.get("/getall", UsuarioControlador_1.default.obtenerUsuarios);
        this.apiUsuarioRuta.post("/add", UsuarioControlador_1.default.agregarUsuario);
        this.apiUsuarioRuta.delete("/delete/:idUsuario", UsuarioControlador_1.default.borrarUsuario);
        this.apiUsuarioRuta.put("/update", UsuarioControlador_1.default.actualizarUsuario);
    }
}
const objUsuarioRuta = new UsuarioRuta();
exports.default = objUsuarioRuta.apiUsuarioRuta;
