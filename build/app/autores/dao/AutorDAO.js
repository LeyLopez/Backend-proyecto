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
const AutorSQL_1 = require("../repository/AutorSQL");
const db_conection_1 = __importDefault(require("../../../config/connection/db_conection"));
class AutorDAO {
    static obtenerTodo(params, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield db_conection_1.default.result(AutorSQL_1.SQL_AUTORES.GET_ALL, params)
                .then((resultado) => {
                res.status(200).json(resultado.rows);
            })
                .catch((miError) => {
                console.log(miError);
                res.status(400).json({
                    "mensaje": "Error al obtener los autores"
                });
            });
        });
    }
    static agregar(datos, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield db_conection_1.default.task((consulta) => __awaiter(this, void 0, void 0, function* () {
                let queHacer = 1;
                let respuBase;
                const cubi = yield consulta.one(AutorSQL_1.SQL_AUTORES.HOW_MANY_NAME_LASTNAME, [datos.nombreAutor, datos.apellidoAutor]);
                if (cubi.existe == 0) {
                    queHacer = 2;
                    respuBase = yield consulta.one(AutorSQL_1.SQL_AUTORES.ADD, [datos.nombreAutor, datos.apellidoAutor, datos.fechaNacimiento]);
                }
                return { queHacer, respuBase };
            }))
                .then(({ queHacer, respuBase }) => {
                switch (queHacer) {
                    case 1:
                        res.status(400).json({
                            "mensaje": "El autor ya existe"
                        });
                        break;
                    default:
                        res.status(200).json({
                            "mensaje": "Autor agregado"
                        });
                        break;
                }
            }).catch((miError) => {
                console.log(miError);
                res.status(400).json({
                    "mensaje": "No se pudo procesar la solicitud"
                });
            });
        });
    }
    static borrarAutor(datos, res) {
        return __awaiter(this, void 0, void 0, function* () {
            db_conection_1.default
                .task((consulta) => {
                return consulta.result(AutorSQL_1.SQL_AUTORES.DELETE, [datos.idAutor]);
            })
                .then((respuesta) => {
                res.status(200).json({
                    "mensaje": "Autor eliminado",
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
                const cubi = yield consulta.one(AutorSQL_1.SQL_AUTORES.HOW_MANY, [datos.idAutor]);
                if (cubi.existe == 1) {
                    queHacer = 2;
                    respuBase = yield consulta.one(AutorSQL_1.SQL_AUTORES.UPDATE, [datos.nombreAutor, datos.apellidoAutor, datos.fechaNacimiento, datos.idAutor]);
                }
                return { queHacer, respuBase };
            }))
                .then(({ queHacer, respuBase }) => {
                switch (queHacer) {
                    case 1:
                        res.status(400).json({
                            "mensaje": "El autor no existe"
                        });
                        break;
                    default:
                        res.status(200).json({
                            "mensaje": "Autor actualizado"
                        });
                        break;
                }
            }).catch((miError) => {
                console.log(miError);
                res.status(400).json({
                    "mensaje": "No se pudo procesar la solicitud"
                });
            });
        });
    }
}
exports.default = AutorDAO;
