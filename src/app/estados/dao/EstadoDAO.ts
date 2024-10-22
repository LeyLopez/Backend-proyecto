import { Response } from "express";
import { SQL_ESTADO } from "../repository/EstadoSQL";
import pool from "../../../config/connection/db_conection";
import Estado from "../entity/Estado";




class EstadoDAO{

    protected static async obtenerTodo(params: any, res: Response){
        await pool.result(SQL_ESTADO.GET_ALL, params)
        .then((resultado)=>{
            res.status(200).json(resultado.rows)})
        .catch((miError)=>{
            console.log(miError);
            res.status(400).json({
                "mensaje": "Error al obtener los estados"
            });
        });
    }



    protected static async agregar(datos: Estado, res: Response): Promise<any>{
        await pool.task(async(consulta)=>{
            let queHacer = 1;
            let respuBase: any;
            const cubi = await consulta.one(SQL_ESTADO.HOW_MANY_NAME, [datos.nombreEstado]);
            if(cubi.existe == 0){
                queHacer = 2;
                respuBase = await consulta.one(SQL_ESTADO.ADD, [datos.nombreEstado, datos.desccripcionEstado]);
            }
            return {queHacer, respuBase};
        })
        .then(({queHacer, respuBase})=>{
            switch(queHacer){
                case 1:
                    res.status(400).json({
                        "mensaje": "El estado ya existe"
                    });
                    break;
                default:
                    res.status(200).json({
                        "mensaje": "Estado agregado"
                    });
                    break;
            }
        }).catch((miError)=>{
            console.log(miError);
            res.status(400).json({
                "mensaje": "No se pudo procesar la solicitud"
            });
        });
    }




    protected static async borrar(datos: Estado, res: Response): Promise<any>{
        pool
        .task((consulta)=>{
            return consulta.result(SQL_ESTADO.DELETE, [datos.idEstado]);
        })
        .then((respuesta)=>{
            res.status(200).json({
                "mensaje": "Estado eliminado",
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



    protected static async actualizar(datos: Estado, res: Response): Promise<any>{
        pool
        .task(async(consulta)=>{
            let queHacer = 1;
            let respuBase: any;
            const cubi = await consulta.one(SQL_ESTADO.HOW_MANY, [datos.idEstado]);
            if(cubi.existe==1){
                queHacer = 2;
                respuBase = await consulta.one(SQL_ESTADO.UPDATE, [datos.nombreEstado, datos.desccripcionEstado, datos.idEstado]);
            }
            return {queHacer, respuBase};
        })
        .then(({queHacer, respuBase})=>{
            switch(queHacer){
                case 1:
                    res.status(400).json({
                        "mensaje": "El estado no existe"
                    });
                    break;
                default:
                    res.status(200).json({
                        "mensaje": "Estado actualizado"
                    });
                    break;
            }
        }).catch((miError)=>{
            console.log(miError);
            res.status(400).json({
                "mensaje": "No se pudo procesar la solicitud"
            });
        });
    }




}


export default EstadoDAO;