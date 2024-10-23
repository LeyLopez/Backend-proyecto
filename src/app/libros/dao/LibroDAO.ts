import { Response } from "express";
import Libro from "../entity/Libro";
import { SQL_LIBRO } from "../repository/LibroSQL";
import pool from "../../../config/connection/db_conection";



class LibroDAO{

    protected static async obtenerTodo(params: any, res: Response){
        await pool.result(SQL_LIBRO.GET_ALL, params)
        .then((resultado)=>{
            res.status(200).json(resultado.rows)})
        .catch((miError)=>{
            console.log(miError);
            res.status(400).json({
                "mensaje": "Error al obtener los libros"
            });
        });
    }



    protected static async agregar(datos: Libro, res: Response): Promise<any>{
        await pool.task(async(consulta)=>{
            let queHacer = 1;
            let respuBase: any;
            const cubi = await consulta.one(SQL_LIBRO.HOW_MANY_NAME, [datos.tituloLibro]);
            if(cubi.existe == 0){
                queHacer = 2;
                respuBase = await consulta.one(SQL_LIBRO.ADD, [
                    datos.tituloLibro, 
                    datos.resumenLibro, 
                    datos.urlPortadaLibro, 
                    datos.tipoLibro, 
                    datos.fechaPublicacion, 
                    datos.cantidadEjemplares, 
                    datos.idAutor
                ]);
            }
            return {queHacer, respuBase};
        })
        .then(({queHacer, respuBase})=>{
            switch(queHacer){
                case 1:
                    res.status(400).json({
                        respuesta: "El libro ya existe"
                    });
                    break;
                default:
                    res.status(200).json({
                        respuesta: "Libro agregado"
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



    protected static async borrar(datos: Libro, res: Response): Promise<any>{
        pool
        .task((consulta)=>{
            return consulta.result(SQL_LIBRO.DELETE, [datos.idLibro]);
        })
        .then((respuesta)=>{
            res.status(200).json({
                "mensaje": "Libro eliminado",
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




    protected static async actualizar(datos: Libro, res: Response): Promise<any>{
        pool
        .task(async(consulta)=>{
            let queHacer = 1;
            let respuBase: any;
            const cubi = await consulta.one(SQL_LIBRO.HOW_MANY, [datos.idLibro]);
            if(cubi.existe==1){
                queHacer = 2;
                respuBase = await consulta.one(SQL_LIBRO.UPDATE, [
                    datos.tituloLibro, 
                    datos.resumenLibro,
                    datos.urlPortadaLibro,
                    datos.tipoLibro,
                    datos.fechaPublicacion,
                    datos.cantidadEjemplares,
                    datos.idAutor,
                    datos.idLibro
                ]);
            }
            return {queHacer, respuBase};
        })
        .then(({queHacer, respuBase})=>{
            switch(queHacer){
                case 1:
                    res.status(400).json({
                        respuesta: "El libro no existe"
                    });
                    break;
                default:
                    res.status(200).json({
                        respuesta: "Libro actualizado"
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

export default LibroDAO;
