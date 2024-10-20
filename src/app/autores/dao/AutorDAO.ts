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
}

export default AutorDAO;