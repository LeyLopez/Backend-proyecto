import { Response } from "express";
import { SQL_GENEROLIBRO } from "../repository/GeneroLibroSQL";
import pool from "../../../config/connection/db_conection";
import GeneroLibro from "../entity/GeneroLibro";


class GeneroLibroDAO{

    protected static async obtenerTodo(params: any, res: Response){
        await pool.result(SQL_GENEROLIBRO.GELL_ALL, params)
        .then((resultado)=>{
            res.status(200).json(resultado.rows)})
        .catch((miError)=>{
            console.log(miError);
            res.status(400).json({
                "mensaje": "Error al obtener los generos de libros"
            });
        });
    }











    

}

export default GeneroLibroDAO;

