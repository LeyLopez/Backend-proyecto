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
const HistorialPrestamoSQL_1 = require("../repository/HistorialPrestamoSQL");
const db_conection_1 = __importDefault(require("../../../config/connection/db_conection"));
class HistorialPrestamoDAO {
    static obtenerTodo(params, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield db_conection_1.default.result(HistorialPrestamoSQL_1.SQL_HISTORIAL_ESTADO_PRESTAMO.GET_ALL, params)
                .then((resultado) => {
                res.status(200).json(resultado.rows);
            })
                .catch((miError) => {
                console.log(miError);
                res.status(400).json({
                    "mensaje": "Error al obtener el historial de estados de las préstamos"
                });
            });
        });
    }
    static agregar(datos, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield db_conection_1.default.task((consulta) => __awaiter(this, void 0, void 0, function* () {
                let queHacer = 1;
                let respuBase;
                const cubi = yield consulta.one(HistorialPrestamoSQL_1.SQL_HISTORIAL_ESTADO_PRESTAMO.HOW_MANY_PRESTAMO_ESTADO, [datos.idPrestamo, datos.idEstado]);
                if (cubi.existe == 0) {
                    queHacer = 2;
                    respuBase = yield consulta.one(HistorialPrestamoSQL_1.SQL_HISTORIAL_ESTADO_PRESTAMO.ADD, [
                        datos.fechaCambioEstado,
                        datos.idPrestamo,
                        datos.idEstado
                    ]);
                }
                return { queHacer, respuBase };
            }))
                .then(({ queHacer, respuBase }) => {
                switch (queHacer) {
                    case 1:
                        res.status(400).json({
                            respuesta: "El préstamo ya tiene este estado"
                        });
                        break;
                    default:
                        res.status(200).json({
                            respuesta: "Historial agregado"
                        });
                        break;
                }
            }).catch((miError) => {
                console.log(miError);
                res.status(400).json({
                    "mensaje": "Error al agregar el historial de estados del préstamo"
                });
            });
        });
    }
    static borrar(datos, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield db_conection_1.default.result(HistorialPrestamoSQL_1.SQL_HISTORIAL_ESTADO_PRESTAMO.DELETE, [datos.idPrestamo])
                .then((resultado) => {
                if (resultado.rowCount == 0) {
                    res.status(400).json({
                        "mensaje": "El historial de estados del préstamo no existe"
                    });
                }
                else {
                    res.status(200).json({
                        "mensaje": "Historial de estados del préstamo eliminado"
                    });
                }
            }).catch((miError) => {
                console.log(miError);
                res.status(400).json({
                    "mensaje": "Error al borrar el historial de estados del préstamo"
                });
            });
        });
    }
    static actualizar(datos, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield db_conection_1.default.task((consulta) => __awaiter(this, void 0, void 0, function* () {
                let queHacer = 1;
                let respuBase;
                const cubi = yield consulta.one(HistorialPrestamoSQL_1.SQL_HISTORIAL_ESTADO_PRESTAMO.HOW_MANY, [datos.idHistorialEstadoPrestamo]);
                if (cubi.existe == 1) {
                    queHacer = 2;
                    respuBase = yield consulta.one(HistorialPrestamoSQL_1.SQL_HISTORIAL_ESTADO_PRESTAMO.UPDATE, [
                        datos.fechaCambioEstado,
                        datos.idPrestamo,
                        datos.idEstado,
                        datos.idHistorialEstadoPrestamo
                    ]);
                }
                return { queHacer, respuBase };
            }))
                .then(({ queHacer, respuBase }) => {
                switch (queHacer) {
                    case 1:
                        res.status(400).json({
                            respuesta: "El historial de estados del préstamo no existe"
                        });
                        break;
                    default:
                        res.status(200).json({
                            respuesta: "Historial actualizado"
                        });
                        break;
                }
            }).catch((miError) => {
                console.log(miError);
                res.status(400).json({
                    "mensaje": "Error al actualizar el historial de estados del préstamo"
                });
            });
        });
    }
}
exports.default = HistorialPrestamoDAO;
