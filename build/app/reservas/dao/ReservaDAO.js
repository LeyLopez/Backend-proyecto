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
const ReservaSQL_1 = require("../repository/ReservaSQL");
const db_conection_1 = __importDefault(require("../../../config/connection/db_conection"));
class ReservaDAO {
    static obtenerTodo(params, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield db_conection_1.default.result(ReservaSQL_1.SQL_RESERVA.GET_ALL, params)
                .then((resultado) => {
                res.status(200).json(resultado.rows);
            })
                .catch((miError) => {
                console.log(miError);
                res.status(400).json({
                    "mensaje": "Error al obtener las reservas"
                });
            });
        });
    }
    static agregar(datos, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield db_conection_1.default.task((consulta) => __awaiter(this, void 0, void 0, function* () {
                let queHacer = 1;
                let respuBase;
                const cubi = yield consulta.one(ReservaSQL_1.SQL_RESERVA.HOW_MANY_USER, [datos.idUsuario, datos.idLibro]);
                if (cubi.existe == 0) {
                    queHacer = 2;
                    respuBase = yield consulta.one(ReservaSQL_1.SQL_RESERVA.ADD, [
                        datos.fechaReserva,
                        datos.fechaFinReserva,
                        datos.idUsuario,
                        datos.idLibro,
                        datos.idEstado
                    ]);
                }
                return { queHacer, respuBase };
            }))
                .then(({ queHacer, respuBase }) => {
                switch (queHacer) {
                    case 1:
                        res.status(400).json({
                            respuesta: "El usuario ya tiene reservado este libro"
                        });
                        break;
                    default:
                        res.status(200).json({
                            respuesta: "Reserva agregada"
                        });
                        break;
                }
            }).catch((miError) => {
                console.log(miError);
                res.status(400).json({
                    "mensaje": "Error al agregar la reserva"
                });
            });
        });
    }
    static borrar(datos, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield db_conection_1.default.result(ReservaSQL_1.SQL_RESERVA.DELETE, [datos.idReserva])
                .then((resultado) => {
                if (resultado.rowCount == 0) {
                    res.status(400).json({
                        "mensaje": "La reserva no existe"
                    });
                }
                else {
                    res.status(200).json({
                        "mensaje": "Reserva eliminada"
                    });
                }
            }).catch((miError) => {
                console.log(miError);
                res.status(400).json({
                    "mensaje": "Error al eliminar la reserva"
                });
            });
        });
    }
    static actualizar(datos, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield db_conection_1.default.task((consulta) => __awaiter(this, void 0, void 0, function* () {
                let queHacer = 1;
                let respuBase;
                const cubi = yield consulta.one(ReservaSQL_1.SQL_RESERVA.HOW_MANY, [datos.idReserva]);
                if (cubi.existe == 1) {
                    queHacer = 2;
                    respuBase = yield consulta.one(ReservaSQL_1.SQL_RESERVA.UPDATE, [
                        datos.fechaReserva,
                        datos.fechaFinReserva,
                        datos.idUsuario,
                        datos.idLibro,
                        datos.idEstado,
                        datos.idReserva
                    ]);
                }
                return { queHacer, respuBase };
            }))
                .then(({ queHacer, respuBase }) => {
                switch (queHacer) {
                    case 1:
                        res.status(400).json({
                            respuesta: "La reserva no existe"
                        });
                        break;
                    default:
                        res.status(200).json({
                            respuesta: "Reserva actualizada"
                        });
                        break;
                }
            }).catch((miError) => {
                console.log(miError);
                res.status(400).json({
                    "mensaje": "Error al actualizar la reserva"
                });
            });
        });
    }
}
exports.default = ReservaDAO;
