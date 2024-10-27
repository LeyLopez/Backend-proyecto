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
const HistorialReservaSQL_1 = require("../repository/HistorialReservaSQL");
const db_conection_1 = __importDefault(require("../../../config/connection/db_conection"));
class HistorialEstadosReservasDAO {
    static obtenerTodo(params, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield db_conection_1.default.result(HistorialReservaSQL_1.SQL_HISTORIAL_ESTADO_RESERVA.GET_ALL, params)
                .then((resultado) => {
                res.status(200).json(resultado.rows);
            })
                .catch((miError) => {
                console.log(miError);
                res.status(400).json({
                    "mensaje": "Error al obtener el historial de estados de las reservas"
                });
            });
        });
    }
    static agregar(datos, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield db_conection_1.default.task((consulta) => __awaiter(this, void 0, void 0, function* () {
                let queHacer = 1;
                let respuBase;
                const cubi = yield consulta.one(HistorialReservaSQL_1.SQL_HISTORIAL_ESTADO_RESERVA.HOW_MANY_RESERVA_ESTADO, [datos.idReserva, datos.idEstado]);
                if (cubi.existe == 0) {
                    queHacer = 2;
                    respuBase = yield consulta.one(HistorialReservaSQL_1.SQL_HISTORIAL_ESTADO_RESERVA.ADD, [
                        datos.fechaCambioEstado,
                        datos.idReserva,
                        datos.idEstado
                    ]);
                }
                return { queHacer, respuBase };
            }))
                .then(({ queHacer, respuBase }) => {
                switch (queHacer) {
                    case 1:
                        res.status(400).json({
                            respuesta: "La reserva ya tiene este estado"
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
                    "mensaje": "Error al agregar el historial de estados de la reserva"
                });
            });
        });
    }
    static borrar(datos, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield db_conection_1.default.result(HistorialReservaSQL_1.SQL_HISTORIAL_ESTADO_RESERVA.DELETE, [datos.idReserva])
                .then((resultado) => {
                if (resultado.rowCount == 0) {
                    res.status(400).json({
                        "mensaje": "El historial de estados de la reserva no existe"
                    });
                }
                else {
                    res.status(200).json({
                        "mensaje": "Historial de estados de la reserva eliminado"
                    });
                }
            }).catch((miError) => {
                console.log(miError);
                res.status(400).json({
                    "mensaje": "Error al eliminar el historial de estados de la reserva"
                });
            });
        });
    }
    static actualizar(datos, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield db_conection_1.default.task((consulta) => __awaiter(this, void 0, void 0, function* () {
                let queHacer = 1;
                let respuBase;
                const cubi = yield consulta.one(HistorialReservaSQL_1.SQL_HISTORIAL_ESTADO_RESERVA.HOW_MANY, [datos.idHistorialEstadoReserva]);
                if (cubi.existe == 1) {
                    queHacer = 2;
                    respuBase = yield consulta.one(HistorialReservaSQL_1.SQL_HISTORIAL_ESTADO_RESERVA.UPDATE, [
                        datos.fechaCambioEstado,
                        datos.idReserva,
                        datos.idEstado,
                        datos.idHistorialEstadoReserva
                    ]);
                }
                return { queHacer, respuBase };
            }))
                .then(({ queHacer, respuBase }) => {
                switch (queHacer) {
                    case 1:
                        res.status(400).json({
                            respuesta: "La reserva ya tiene este estado"
                        });
                        break;
                    default:
                        res.status(200).json({
                            respuesta: "Historial de estados de la reserva actualizado"
                        });
                        break;
                }
            }).catch((miError) => {
                console.log(miError);
                res.status(400).json({
                    "mensaje": "Error al actualizar el historial de estados de la reserva"
                });
            });
        });
    }
}
exports.default = HistorialEstadosReservasDAO;
