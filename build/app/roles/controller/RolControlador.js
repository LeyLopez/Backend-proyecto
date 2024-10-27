"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Rol_1 = __importDefault(require("../entity/Rol"));
const RolDAO_1 = __importDefault(require("../dao/RolDAO"));
class RolControlador extends RolDAO_1.default {
    obtenerRoles(req, res) {
        RolDAO_1.default.obtenerTodo([], res);
    }
    agregarRol(req, res) {
        const objRol = new Rol_1.default(0, "", "");
        objRol.nombreRol = req.body.nombreRol;
        objRol.descripcionRol = req.body.descripcionRol;
        RolDAO_1.default.agregar(objRol, res);
    }
    borrarRol(req, res) {
        if (isNaN(Number(req.params.idRol))) {
            res.status(400).json({
                "mensaje": "El id del rol debe ser un número"
            });
        }
        else {
            const codigo = Number(req.params.idRol);
            const objRol = new Rol_1.default(codigo, "", "");
            RolDAO_1.default.borrar(objRol, res);
        }
    }
    actualizarRol(req, res) {
        const objRol = new Rol_1.default(0, "", "");
        objRol.idRol = Number(req.body.idRol);
        objRol.nombreRol = req.body.nombreRol;
        objRol.descripcionRol = req.body.descripcionRol;
        RolDAO_1.default.actualizar(objRol, res);
    }
}
const rolControlador = new RolControlador();
exports.default = rolControlador;
