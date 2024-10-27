"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const RolControlador_1 = __importDefault(require("../controller/RolControlador"));
class RolRuta {
    constructor() {
        this.apiRolRuta = (0, express_1.Router)();
        this.misRutas();
    }
    misRutas() {
        this.apiRolRuta.get("/getall", RolControlador_1.default.obtenerRoles);
        this.apiRolRuta.post("/add", RolControlador_1.default.agregarRol);
        this.apiRolRuta.delete("/delete/:idRol", RolControlador_1.default.borrarRol);
        this.apiRolRuta.put("/update", RolControlador_1.default.actualizarRol);
    }
}
const rolRuta = new RolRuta();
exports.default = rolRuta.apiRolRuta;
