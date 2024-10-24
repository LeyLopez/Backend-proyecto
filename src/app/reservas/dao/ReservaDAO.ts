import { Response } from "express";
import Reserva from "../entity/Reserva";
import { SQL_RESERVA } from "../repository/ReservaSQL";
import pool from "../../../config/connection/db_conection";



class ReservaDAO{

    protected static async obtenerTodo(params: any, res: Response){
        await pool.result(SQL_RESERVA.GET_ALL, params)
        .then((resultado)=>{
            res.status(200).json(resultado.rows)})
        .catch((miError)=>{
            console.log(miError);
            res.status(400).json({
                "mensaje": "Error al obtener las reservas"
            });
        });
    }


    protected static async agregar(datos: Reserva, res: Response): Promise<any>{
        await pool.task(async(consulta)=>{
            let queHacer = 1;
            let respuBase: any;
            const cubi = await consulta.one(SQL_RESERVA.HOW_MANY_USER, [datos.idUsuario, datos.idLibro]);
            if(cubi.existe == 0){
                queHacer = 2;
                respuBase = await consulta.one(SQL_RESERVA.ADD, [
                    datos.fechaReserva,
                    datos.fechaFinReserva,
                    datos.idUsuario,
                    datos.idLibro,
                    datos.idEstado
                ]);
            }
            return {queHacer, respuBase};
        })
        .then(({queHacer, respuBase})=>{
            switch(queHacer){
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
        }).catch((miError)=>{
            console.log(miError);
            res.status(400).json({
                "mensaje": "Error al agregar la reserva"
            });
        });
    }




    protected static async borrar(datos: Reserva, res: Response): Promise<any>{
        await pool.result(SQL_RESERVA.DELETE, [datos.idReserva])
        .then((resultado)=>{
            if(resultado.rowCount == 0){
                res.status(400).json({
                    "mensaje": "La reserva no existe"
                });
            }else{
                res.status(200).json({
                    "mensaje": "Reserva eliminada"
                });
            }
        }).catch((miError)=>{
            console.log(miError);
            res.status(400).json({
                "mensaje": "Error al eliminar la reserva"
            });
        });
    }




    protected static async actualizar(datos: Reserva, res: Response): Promise<any>{
        await pool.task(async(consulta)=>{
            let queHacer = 1;
            let respuBase: any;
            const cubi = await consulta.one(SQL_RESERVA.HOW_MANY, [datos.idReserva]);
            if(cubi.existe == 1){
                queHacer = 2;
                respuBase = await consulta.one(SQL_RESERVA.UPDATE, [
                    datos.fechaReserva,
                    datos.fechaFinReserva,
                    datos.idUsuario,
                    datos.idLibro,
                    datos.idEstado,
                    datos.idReserva
                ]);
            }
            return {queHacer, respuBase};
        })
        .then(({queHacer, respuBase})=>{
            switch(queHacer){
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
        }).catch((miError)=>{
            console.log(miError);
            res.status(400).json({
                "mensaje": "Error al actualizar la reserva"
            });
        });
    }





}


export default ReservaDAO;
