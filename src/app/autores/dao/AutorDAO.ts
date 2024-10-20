import { Response } from "express";
import { SQL_AUTORES } from "../repository/AutorSQL";
import pool from "../../../config/connection/db_conection";
import Autor from "../entity/Autor";

class AutorDAO{
    
        protected static async obtenerTodo(params: any, res: Response){
            await pool.result(SQL_AUTORES.GET_ALL, params)
            .then((resultado)=>{
                res.status(200).json(resultado.rows)})
            .catch((miError)=>{
                console.log(miError);
                res.status(400).json({
                    "mensaje": "Error al obtener los autores"
                });
            });
        }



        protected static async agregar(datos: Autor, res: Response): Promise<any>{
            await pool.task(async(consulta)=>{
                let queHacer = 1;
                let respuBase: any;
                const cubi = await consulta.one(SQL_AUTORES.HOW_MANY, [datos.idAutor]);
                if(cubi.existe == 0){
                    queHacer = 2;
                    respuBase = await consulta.one(SQL_AUTORES.ADD, [datos.nombreAutor, datos.apellidoAutor, datos.fechaNacimiento]);
                }
                return {queHacer, respuBase};
            })
            .then(({queHacer, respuBase})=>{
                switch(queHacer){
                    case 1:
                        res.status(400).json({
                            "mensaje": "El autor ya existe"
                        });
                        break;
                    default:
                        res.status(200).json({
                            "mensaje": "Autor agregado"
                        });
                        break;
                }
            }).catch((miError:any)=>{
                console.log(miError);
                res.status(400).json({
                    "mensaje": "No se pudo procesar la solicitud"
                });
            });
        }






        protected static async actualizar(datos: Autor, res: Response): Promise<any>{
            await pool.task(async(consulta)=>{
                let queHacer = 1;
                let respuBase: any;
                const cubi = await consulta.one(SQL_AUTORES.HOW_MANY, [datos.idAutor]);
                if(cubi.existe == 1){
                    queHacer = 2;
                    respuBase = await consulta.one(SQL_AUTORES.UPDATE, [datos.nombreAutor, datos.apellidoAutor, datos.fechaNacimiento, datos.idAutor]);
                }
                return {queHacer, respuBase};
            })
            .then(({queHacer, respuBase})=>{
                switch(queHacer){
                    case 1:
                        res.status(400).json({
                            "mensaje": "El autor no existe"
                        });
                        break;
                    default:
                        res.status(200).json({
                            "mensaje": "Autor actualizado"
                        });
                        break;
                }
            }).catch((miError:any)=>{
                console.log(miError);
                res.status(400).json({
                    "mensaje": "No se pudo procesar la solicitud"
                });
            });
        }







}

export default AutorDAO;