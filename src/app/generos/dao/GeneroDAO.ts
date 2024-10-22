import { Response } from "express";
import { SQL_GENERO } from "../repository/GeneroSQL";
import pool from "../../../config/connection/db_conection";
import Genero from "../entity/Genero";


class GeneroDAO{

    protected static async obtenerTodo(params: any, res: Response){
        await pool.result(SQL_GENERO.GET_ALL, params)
        .then((resultado)=>{
            res.status(200).json(resultado.rows)})
        .catch((miError)=>{
            console.log(miError);
            res.status(400).json({
                "mensaje": "Error al obtener los generos"
            });
        });
    }



    protected static async agregar(datos: Genero, res: Response): Promise<any>{
        await pool.task(async(consulta)=>{
            let queHacer = 1;
            let respuBase: any;
            const cubi = await consulta.one(SQL_GENERO.HOW_MANY_NAME, [datos.nombreGenero]);
            if(cubi.existe == 0){
                queHacer = 2;
                respuBase = await consulta.one(SQL_GENERO.ADD, [datos.nombreGenero]);
            }
            return {queHacer, respuBase};
        })
        .then(({queHacer, respuBase})=>{
            switch(queHacer){
                case 1:
                    res.status(400).json({
                        respuesta: "El género ya existe"
                    });
                    break;
                default:
                    res.status(200).json({
                        respuesta: "Género agregado"
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




    protected static async borrar(datos: Genero, res: Response): Promise<any>{
        pool
        .task((consulta)=>{
            return consulta.result(SQL_GENERO.DELETE, [datos.idGenero]);
        })
        .then((respuesta)=>{
            res.status(200).json({
                "mensaje": "Genero eliminado",
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





    protected static async actualizar(datos: Genero, res: Response): Promise<any>{
        pool
        .task(async(consulta)=>{
            let queHacer = 1;
            let respuBase: any;
            const cubi = await consulta.one(SQL_GENERO.HOW_MANY, [datos.idGenero]);
            if(cubi.existe==1){
                queHacer = 2;
                respuBase = await consulta.one(SQL_GENERO.UPDATE, [datos.nombreGenero, datos.idGenero]);
            }
            return {queHacer, respuBase};
        })
        .then(({queHacer, respuBase})=>{
            switch(queHacer){
                case 1:
                    res.status(400).json({
                        respuesta: "El género no existe"
                    });
                    break;
                default:
                    res.status(200).json({
                        respuesta: "Género actualizado"
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


export default GeneroDAO;