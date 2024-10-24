import { Response } from "express";
import { SQL_HISTORIAL_ESTADO_RESERVA } from "../repository/HistorialReservaRepository";
import  pool  from "../../../config/connection/db_conection";
import HistorialEstadoReserva from "../entity/HistorialReserva";


class HistorialEstadosReservasDAO{

    protected static async obtenerTodo(params: any, res: Response){
        await pool.result(SQL_HISTORIAL_ESTADO_RESERVA.GET_ALL, params)
        .then((resultado)=>{
            res.status(200).json(resultado.rows)})
        .catch((miError)=>{
            console.log(miError);
            res.status(400).json({
                "mensaje": "Error al obtener el historial de estados de las reservas"
            });
        });
    }



    protected static async agregar(datos: HistorialEstadoReserva, res: Response): Promise<any>{
        await pool.task(async(consulta)=>{
            let queHacer = 1;
            let respuBase: any;
            const cubi = await consulta.one(SQL_HISTORIAL_ESTADO_RESERVA.HOW_MANY_RESERVA_ESTADO, [datos.idReserva, datos.idEstado]);
            if(cubi.existe == 0){
                queHacer = 2;
                respuBase = await consulta.one(SQL_HISTORIAL_ESTADO_RESERVA.ADD, [
                    datos.fechaCambioEstado,
                    datos.idReserva,
                    datos.idEstado
                ]);
            }
            return {queHacer, respuBase};
        })
        .then(({queHacer, respuBase})=>{
            switch(queHacer){
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
        }).catch((miError)=>{
            console.log(miError);
            res.status(400).json({
                "mensaje": "Error al agregar el historial de estados de la reserva"
            });
        });
    }



    protected static async borrar(datos: HistorialEstadoReserva, res: Response): Promise<any>{
        await pool.result(SQL_HISTORIAL_ESTADO_RESERVA.DELETE, [datos.idReserva])
        .then((resultado)=>{
            if(resultado.rowCount == 0){
                res.status(400).json({
                    "mensaje": "El historial de estados de la reserva no existe"
                });
            }else{
                res.status(200).json({
                    "mensaje": "Historial de estados de la reserva eliminado"
                });
            }
        }).catch((miError)=>{
            console.log(miError);
            res.status(400).json({
                "mensaje": "Error al eliminar el historial de estados de la reserva"
            });
        });
    }




    protected static async actualizar(datos: HistorialEstadoReserva, res: Response): Promise<any>{
        await pool.task(async(consulta)=>{
            let queHacer = 1;
            let respuBase: any;
            const cubi = await consulta.one(SQL_HISTORIAL_ESTADO_RESERVA.HOW_MANY, [datos.idHistorialEstadoReserva]);
            if(cubi.existe == 1){
                queHacer = 2;
                respuBase = await consulta.one(SQL_HISTORIAL_ESTADO_RESERVA.UPDATE, [
                    datos.fechaCambioEstado,
                    datos.idReserva,
                    datos.idEstado,
                    datos.idHistorialEstadoReserva
                ]);
            }
            return {queHacer, respuBase};
        })
        .then(({queHacer, respuBase})=>{
            switch(queHacer){
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
        }).catch((miError)=>{
            console.log(miError);
            res.status(400).json({
                "mensaje": "Error al actualizar el historial de estados de la reserva"
            });
        });
    }


}


export default HistorialEstadosReservasDAO;
