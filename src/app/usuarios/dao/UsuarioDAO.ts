import { Response } from "express";
import Usuario from "../entity/Usuario";
import { SQL_USUARIO } from "../repository/UsuarioSQL";
import pool from "../../../config/connection/db_conection";



class UsuarioDAO{

    protected static async obtenerTodo(params: any, res: Response){
        await pool.result(SQL_USUARIO.GET_ALL, params)
        .then((resultado)=>{
            res.status(200).json(resultado.rows)})
        .catch((miError)=>{
            console.log(miError);
            res.status(400).json({
                "mensaje": "Error al obtener los usuarios"
            });
        });
    }




    protected static async agregar(datos: Usuario, res: Response): Promise<any>{
        await pool.task(async(consulta)=>{
            let queHacer = 1;
            let respuBase: any;
            const cubi = await consulta.one(SQL_USUARIO.HOW_MANY_EMAIL, [datos.emailUsuario]);
            if(cubi.existe == 0){
                queHacer = 2;
                respuBase = await consulta.one(SQL_USUARIO.ADD, [
                    datos.nombreUsuario,
                    datos.apellidoUsuario,
                    datos.emailUsuario,
                    datos.claveUsuario,
                    datos.tipoDocumentoUsuario,
                    datos.numeroDocumentoUsuario,
                    datos.fechaNacimientoUsuario,
                    datos.telefonoUsuario,
                    datos.direccionUsuario,
                    datos.idRol
                ]);
            }
            return {queHacer, respuBase};
        })
        .then(({queHacer, respuBase})=>{
            switch(queHacer){
                case 1:
                    res.status(400).json({
                        respuesta: "El usuario ya existe"
                    });
                    break;
                default:
                    res.status(200).json({
                        respuesta: "Usuario agregado"
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




    protected static async borrar(datos: Usuario, res: Response): Promise<any>{
        pool
        .task((consulta)=>{
            return consulta.result(SQL_USUARIO.DELETE, [datos.idUsuario]);
        })
        .then((respuesta)=>{
            res.status(200).json({
                "mensaje": "Usuario eliminado",
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




    protected static async actualizar(datos: Usuario, res: Response): Promise<any>{
        pool
        .task(async(consulta)=>{
            let queHacer = 1;
            let respuBase: any;
            const cubi = await consulta.one(SQL_USUARIO.HOW_MANY, [datos.idUsuario]);
            if(cubi.existe==1){
                queHacer = 2;
                respuBase = await consulta.one(SQL_USUARIO.UPDATE, [
                    datos.nombreUsuario,
                    datos.apellidoUsuario,
                    datos.emailUsuario,
                    datos.claveUsuario,
                    datos.tipoDocumentoUsuario,
                    datos.numeroDocumentoUsuario,
                    datos.fechaNacimientoUsuario,
                    datos.telefonoUsuario,
                    datos.direccionUsuario,
                    datos.idRol,
                    datos.idUsuario
                ]);
            }
            return {queHacer, respuBase};
        })
        .then(({queHacer, respuBase})=>{
            switch(queHacer){
                case 1:
                    res.status(400).json({
                        respuesta: "El usuario no existe"
                    });
                    break;
                default:
                    res.status(200).json({
                        respuesta: "Usuario actualizado"
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


export default UsuarioDAO;