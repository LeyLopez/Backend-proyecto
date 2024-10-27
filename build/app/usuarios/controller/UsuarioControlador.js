"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UsuarioDAO_1 = __importDefault(require("../dao/UsuarioDAO"));
const Usuario_1 = __importDefault(require("../entity/Usuario"));
class UsuarioControlador extends UsuarioDAO_1.default {
    obtenerUsuarios(req, res) {
        UsuarioDAO_1.default.obtenerTodo([], res);
    }
    agregarUsuario(req, res) {
        const ObjUsuario = new Usuario_1.default(0, "", "", "", "", "", "", new Date(), "", "", 0);
        ObjUsuario.nombreUsuario = req.body.nombreUsuario;
        ObjUsuario.apellidoUsuario = req.body.apellidoUsuario;
        ObjUsuario.emailUsuario = req.body.emailUsuario;
        ObjUsuario.claveUsuario = req.body.claveUsuario;
        ObjUsuario.tipoDocumentoUsuario = req.body.tipoDocumentoUsuario;
        ObjUsuario.numeroDocumentoUsuario = req.body.numeroDocumentoUsuario;
        const fechaNacStr = req.body.fechaNacimientoUsuario;
        const [dia, mes, anio] = fechaNacStr.split('-');
        ObjUsuario.fechaNacimientoUsuario = new Date(`${anio}-${mes}-${dia}`); // Formato YYYY-MM-DD
        ObjUsuario.telefonoUsuario = req.body.telefonoUsuario;
        ObjUsuario.direccionUsuario = req.body.direccionUsuario;
        ObjUsuario.idRol = req.body.idRol;
        UsuarioDAO_1.default.agregar(ObjUsuario, res);
    }
    borrarUsuario(req, res) {
        if (isNaN(Number(req.params.idUsuario))) {
            res.status(400).json({
                "mensaje": "El id del usuario debe ser un número"
            });
        }
        else {
            const codigo = Number(req.params.idUsuario);
            const ObjUsuario = new Usuario_1.default(codigo, "", "", "", "", "", "", new Date(), "", "", 0);
            UsuarioDAO_1.default.borrar(ObjUsuario, res);
        }
    }
    actualizarUsuario(req, res) {
        const ObjUsuario = new Usuario_1.default(0, "", "", "", "", "", "", new Date(), "", "", 0);
        ObjUsuario.idUsuario = Number(req.body.idUsuario);
        ObjUsuario.nombreUsuario = req.body.nombreUsuario;
        ObjUsuario.apellidoUsuario = req.body.apellidoUsuario;
        ObjUsuario.emailUsuario = req.body.emailUsuario;
        ObjUsuario.claveUsuario = req.body.claveUsuario;
        ObjUsuario.tipoDocumentoUsuario = req.body.tipoDocumentoUsuario;
        ObjUsuario.numeroDocumentoUsuario = req.body.numeroDocumentoUsuario;
        const fechaNacStr = req.body.fechaNacimientoUsuario;
        const [dia, mes, anio] = fechaNacStr.split('-');
        ObjUsuario.fechaNacimientoUsuario = new Date(`${anio}-${mes}-${dia}`);
        ObjUsuario.telefonoUsuario = req.body.telefonoUsuario;
        ObjUsuario.direccionUsuario = req.body.direccionUsuario;
        ObjUsuario.idRol = req.body.idRol;
        UsuarioDAO_1.default.actualizar(ObjUsuario, res);
    }
}
const objUsuarioControlador = new UsuarioControlador();
exports.default = objUsuarioControlador;
