"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UsuarioSQL_1 = require("../repository/UsuarioSQL");
const db_conection_1 = __importDefault(require("../../../config/connection/db_conection"));
class UsuarioDAO {
    static obtenerTodo(params, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield db_conection_1.default.result(UsuarioSQL_1.SQL_USUARIO.GET_ALL, params)
                .then((resultado) => {
                res.status(200).json(resultado.rows);
            })
                .catch((miError) => {
                console.log(miError);
                res.status(400).json({
                    "mensaje": "Error al obtener los usuarios"
                });
            });
        });
    }
    static agregar(datos, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield db_conection_1.default.task((consulta) => __awaiter(this, void 0, void 0, function* () {
                let queHacer = 1;
                let respuBase;
                const cubi = yield consulta.one(UsuarioSQL_1.SQL_USUARIO.HOW_MANY_EMAIL, [datos.emailUsuario]);
                if (cubi.existe == 0) {
                    queHacer = 2;
                    respuBase = yield consulta.one(UsuarioSQL_1.SQL_USUARIO.ADD, [
                        datos.nombreUsuario,
                        datos.apellidoUsuario,
                        datos.emailUsuario,
                        datos.claveUsuario,
                        datos.tipoDocumentoUsuario,
                        datos.numeroDocumentoUsuario,
                        datos.fechaNacimientoUsuario,
                        datos.telefonoUsuario,
                        datos.direccionUsuario,
                        datos.idRol
                    ]);
                }
                return { queHacer, respuBase };
            }))
                .then(({ queHacer, respuBase }) => {
                switch (queHacer) {
                    case 1:
                        res.status(400).json({
                            respuesta: "El usuario ya existe"
                        });
                        break;
                    default:
                        res.status(200).json({
                            respuesta: "Usuario agregado"
                        });
                        break;
                }
            }).catch((miError) => {
                console.log(miError);
                res.status(400).json({
                    respuesta: "No se pudo procesar la solicitud"
                });
            });
        });
    }
    static borrar(datos, res) {
        return __awaiter(this, void 0, void 0, function* () {
            db_conection_1.default
                .task((consulta) => {
                return consulta.result(UsuarioSQL_1.SQL_USUARIO.DELETE, [datos.idUsuario]);
            })
                .then((respuesta) => {
                res.status(200).json({
                    "mensaje": "Usuario eliminado",
                    info: respuesta.rowCount,
                });
            })
                .catch((miError) => {
                console.log(miError);
                res.status(400).json({
                    respuesta: "No se pudo procesar la solicitud"
                });
            });
        });
    }
    static actualizar(datos, res) {
        return __awaiter(this, void 0, void 0, function* () {
            db_conection_1.default
                .task((consulta) => __awaiter(this, void 0, void 0, function* () {
                let queHacer = 1;
                let respuBase;
                const cubi = yield consulta.one(UsuarioSQL_1.SQL_USUARIO.HOW_MANY, [datos.idUsuario]);
                if (cubi.existe == 1) {
                    queHacer = 2;
                    respuBase = yield consulta.one(UsuarioSQL_1.SQL_USUARIO.UPDATE, [
                        datos.nombreUsuario,
                        datos.apellidoUsuario,
                        datos.emailUsuario,
                        datos.claveUsuario,
                        datos.tipoDocumentoUsuario,
                        datos.numeroDocumentoUsuario,
                        datos.fechaNacimientoUsuario,
                        datos.telefonoUsuario,
                        datos.direccionUsuario,
                        datos.idRol,
                        datos.idUsuario
                    ]);
                }
                return { queHacer, respuBase };
            }))
                .then(({ queHacer, respuBase }) => {
                switch (queHacer) {
                    case 1:
                        res.status(400).json({
                            respuesta: "El usuario no existe"
                        });
                        break;
                    default:
                        res.status(200).json({
                            respuesta: "Usuario actualizado"
                        });
                        break;
                }
            }).catch((miError) => {
                console.log(miError);
                res.status(400).json({
                    respuesta: "No se pudo procesar la solicitud"
                });
            });
        });
    }
}
exports.default = UsuarioDAO;
