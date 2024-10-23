import { Response } from "express";
import { SQL_ROL } from "../repository/RolSQL";
import pool from "../../../config/connection/db_conection";
import Rol from "../entity/Rol";



class RolDAO{

    protected static async obtenerTodo(params: any, res: Response){
        await pool.result(SQL_ROL.GET_ALL, params)
        .then((resultado)=>{
            res.status(200).json(resultado.rows)})
        .catch((miError)=>{
            console.log(miError);
            res.status(400).json({
                "mensaje": "Error al obtener los roles"
            });
        });
    }



    protected static async agregar(datos: Rol, res: Response): Promise<any>{
        await pool.task(async(consulta)=>{
            let queHacer = 1;
            let respuBase: any;
            const cubi = await consulta.one(SQL_ROL.HOW_MANY_NAME, [datos.nombreRol]);
            if(cubi.existe == 0){
                queHacer = 2;
                respuBase = await consulta.one(SQL_ROL.ADD, [datos.nombreRol]);
            }
            return {queHacer, respuBase};
        })
        .then(({queHacer, respuBase})=>{
            switch(queHacer){
                case 1:
                    res.status(400).json({
                        respuesta: "El rol ya existe"
                    });
                    break;
                default:
                    res.status(200).json({
                        respuesta: "Rol agregado"
                    });
                    break;
            }
        }).catch((miError)=>{
            console.log(miError);
            res.status(400).json({
                respuesta: "No se pudo procesar la solicitud"
            });
        });
    }



    protected static async borrar(datos: Rol, res: Response): Promise<any>{
        pool
        .task((consulta)=>{
            return consulta.result(SQL_ROL.DELETE, [datos.idRol]);
        })
        .then((respuesta)=>{
            res.status(200).json({
                "mensaje": "Rol eliminado",
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



    protected static async actualizar(datos: Rol, res: Response): Promise<any>{
        pool
        .task(async(consulta)=>{
            let queHacer = 1;
            let respuBase: any;
            const cubi = await consulta.one(SQL_ROL.HOW_MANY, [datos.idRol]);
            if(cubi.existe==1){
                queHacer = 2;
                respuBase = await consulta.one(SQL_ROL.UPDATE, [datos.nombreRol, datos.descripcionRol, datos.idRol]);
            }
            return {queHacer, respuBase};
        })
        .then(({queHacer, respuBase})=>{
            switch(queHacer){
                case 1:
                    res.status(400).json({
                        respuesta: "El rol no existe"
                    });
                    break;
                default:
                    res.status(200).json({
                        respuesta: "Rol actualizado"
                    });
                    break;
            }
        }).catch((miError)=>{
            console.log(miError);
            res.status(400).json({
                respuesta: "No se pudo procesar la solicitud"
            });
        });
    }







}

export default RolDAO;
