import { Response } from "express";
import Prestamo from "../entity/Prestamo";
import { SQL_PRESTAMO } from "../repository/PrestamoSQL";
import pool from "../../../config/connection/db_conection";



class PrestamoDAO{

    protected static async obtenerTodo(params: any, res: Response){
        await pool.result(SQL_PRESTAMO.GET_ALL, params)
        .then((resultado)=>{
            res.status(200).json(resultado.rows)})
        .catch((miError)=>{
            console.log(miError);
            res.status(400).json({
                "mensaje": "Error al obtener los prestamos"
            });
        });
    }




    protected static async agregar(datos: Prestamo, res: Response): Promise<any>{
        await pool.task(async(consulta)=>{
            let queHacer = 1;
            let respuBase: any;
            const cubi = await consulta.one(SQL_PRESTAMO.HOW_MANY_USER, [datos.idUsuario, datos.idLibro]);
            if(cubi.existe == 0){
                queHacer = 2;
                respuBase = await consulta.one(SQL_PRESTAMO.ADD, [
                    datos.fechaPrestamo,
                    datos.fechaDevolucion,
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
                        respuesta: "El usuario ya tiene prestado este libro"
                    });
                    break;
                default:
                    res.status(200).json({
                        respuesta: "Prestamo agregado"
                    });
                    break;
            }
        }).catch((miError)=>{
            console.log(miError);
            res.status(400).json({
                "mensaje": "Error al agregar el prestamo"
            });
        });
    }


    protected static async borrar(datos: Prestamo, res: Response): Promise<any>{
        pool
        .task((consulta)=>{
            return consulta.result(SQL_PRESTAMO.DELETE, [datos.idPrestamo]);
        })
        .then((respuesta)=>{
            res.status(200).json({
                "mensaje": "Prestamo eliminado",
                info: respuesta.rowCount,
            });
        })
        .catch((miError)=>{
            console.log(miError);
            res.status(400).json({
                respuesta: "No se pudo procesar la solicitud"
            });
        });
    }



    protected static async actualizar(datos: Prestamo, res: Response): Promise<any>{
        pool
        .task(async(consulta)=>{
            let queHacer = 1;
            let respuBase: any;
            const cubi = await consulta.one(SQL_PRESTAMO.HOW_MANY, [datos.idPrestamo]);
            if(cubi.existe==1){
                queHacer = 2;
                respuBase = await consulta.one(SQL_PRESTAMO.UPDATE, [
                    datos.fechaPrestamo,
                    datos.fechaDevolucion,
                    datos.idUsuario,
                    datos.idLibro,
                    datos.idEstado,
                    datos.idPrestamo
                ]);
            }
            return {queHacer, respuBase};
        })
        .then(({queHacer, respuBase})=>{
            switch(queHacer){
                case 1:
                    res.status(400).json({
                        respuesta: "El prestamo no existe"
                    });
                    break;
                default:
                    res.status(200).json({
                        respuesta: "Prestamo actualizado"
                    });
                    break;
            }
        }).catch((miError)=>{
            console.log(miError);
            res.status(400).json({
                "mensaje": "Error al actualizar el prestamo"
            });
        });
    }


}


export default PrestamoDAO;