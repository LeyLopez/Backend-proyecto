import { SQL_HISTORIAL_ESTADO_PRESTAMO } from "../repository/HistorialPrestamoSQL";
import { Response } from "express";
import HistorialEstadoReserva from "../../historialEstadosReservas/entity/HistorialReserva";
import pool from "../../../config/connection/db_conection";
import HistorialPrestamo from "../entity/HistorialPrestamo";


class HistorialPrestamoDAO{

    protected static async obtenerTodo(params: any, res: Response){
        await pool.result(SQL_HISTORIAL_ESTADO_PRESTAMO.GET_ALL, params)
        .then((resultado)=>{
            res.status(200).json(resultado.rows)})
        .catch((miError)=>{
            console.log(miError);
            res.status(400).json({
                "mensaje": "Error al obtener el historial de estados de las préstamos"
            });
        });
    }




    protected static async agregar(datos: HistorialPrestamo, res: Response): Promise<any>{
        await pool.task(async(consulta)=>{
            let queHacer = 1;
            let respuBase: any;
            const cubi = await consulta.one(SQL_HISTORIAL_ESTADO_PRESTAMO.HOW_MANY_PRESTAMO_ESTADO, [datos.idPrestamo, datos.idEstado]);
            if(cubi.existe == 0){
                queHacer = 2;
                respuBase = await consulta.one(SQL_HISTORIAL_ESTADO_PRESTAMO.ADD, [
                    datos.fechaCambioEstado,
                    datos.idPrestamo,
                    datos.idEstado
                ]);
            }
            return {queHacer, respuBase};
        })
        .then(({queHacer, respuBase})=>{
            switch(queHacer){
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
        }).catch((miError)=>{
            console.log(miError);
            res.status(400).json({
                "mensaje": "Error al agregar el historial de estados del préstamo"
            });
        });
    }




    protected static async borrar(datos: HistorialPrestamo, res: Response): Promise<any>{
        await pool.result(SQL_HISTORIAL_ESTADO_PRESTAMO.DELETE, [datos.idPrestamo])
        .then((resultado)=>{
            if(resultado.rowCount == 0){
                res.status(400).json({
                    "mensaje": "El historial de estados del préstamo no existe"
                });
            }else{
                res.status(200).json({
                    "mensaje": "Historial de estados del préstamo eliminado"
                });
            }
        }).catch((miError)=>{
            console.log(miError);
            res.status(400).json({
                "mensaje": "Error al borrar el historial de estados del préstamo"
            });
        });
    }




    

    protected static async actualizar(datos: HistorialPrestamo, res: Response): Promise<any>{
        await pool.task(async(consulta)=>{
            let queHacer = 1;
            let respuBase: any;
            const cubi = await consulta.one(SQL_HISTORIAL_ESTADO_PRESTAMO.HOW_MANY, [datos.idHistorialEstadoPrestamo]);
            if(cubi.existe == 1){
                queHacer = 2;
                respuBase = await consulta.one(SQL_HISTORIAL_ESTADO_PRESTAMO.UPDATE, [
                    datos.fechaCambioEstado,
                    datos.idPrestamo,
                    datos.idEstado,
                    datos.idHistorialEstadoPrestamo
                ]);
            }
            return {queHacer, respuBase};
        })
        .then(({queHacer, respuBase})=>{
            switch(queHacer){
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
        }).catch((miError)=>{
            console.log(miError);
            res.status(400).json({
                "mensaje": "Error al actualizar el historial de estados del préstamo"
            });
        });
    }




}


export default HistorialPrestamoDAO;
