import { Response, Request } from "express";
import UsuarioDAO from "../dao/UsuarioDAO";
import Usuario from "../entity/Usuario";


class UsuarioControlador extends UsuarioDAO{

    public obtenerUsuarios(req: Request, res: Response){
        UsuarioDAO.obtenerTodo([], res);
    }

    public agregarUsuario(req: Request, res: Response): void {
        const ObjUsuario: Usuario = new Usuario(0,"","", "", "", "", "", new Date(), "", "", 0);
        ObjUsuario.nombreUsuario = req.body.nombreUsuario;
        ObjUsuario.apellidoUsuario = req.body.apellidoUsuario;
        ObjUsuario.emailUsuario = req.body.emailUsuario;
        ObjUsuario.claveUsuario = req.body.claveUsuario;
        ObjUsuario.tipoDocumentoUsuario = req.body.tipoDocumentoUsuario;
        ObjUsuario.numeroDocumentoUsuario = req.body.numeroDocumentoUsuario;
        const fechaNacStr = req.body.fechaNacimientoUsuario;
        const [dia, mes, anio] = fechaNacStr.split('-');
        ObjUsuario.fechaNacimientoUsuario = new Date(`${anio}-${mes}-${dia}`);  // Formato YYYY-MM-DD
        ObjUsuario.telefonoUsuario = req.body.telefonoUsuario;
        ObjUsuario.direccionUsuario = req.body.direccionUsuario;
        ObjUsuario.idRol = req.body.idRol;
        UsuarioDAO.agregar(ObjUsuario, res);
    }



    public borrarUsuario(req: Request, res: Response):void{
        if(isNaN(Number(req.params.idUsuario))){
            res.status(400).json({
                "mensaje": "El id del usuario debe ser un número"
            });
        }else{
            const codigo = Number(req.params.idUsuario);
            const ObjUsuario:Usuario = new Usuario(codigo, "", "", "", "", "", "", new Date(), "", "", 0);
            UsuarioDAO.borrar(ObjUsuario, res);
        }

    }



    public actualizarUsuario(req: Request, res: Response):void{
        const ObjUsuario:Usuario = new Usuario(0,"","", "", "", "", "", new Date(), "", "", 0);
        ObjUsuario.idUsuario = Number(req.body.idUsuario);
        ObjUsuario.nombreUsuario = req.body.nombreUsuario;
        ObjUsuario.apellidoUsuario = req.body.apellidoUsuario;
        ObjUsuario.emailUsuario = req.body.emailUsuario;
        ObjUsuario.claveUsuario = req.body.claveUsuario;
        ObjUsuario.tipoDocumentoUsuario = req.body.tipoDocumentoUsuario;
        ObjUsuario.numeroDocumentoUsuario = req.body.numeroDocumentoUsuario;
        const fechaNacStr = req.body.fechaNacimientoUsuario;
        const [dia, mes, anio] = fechaNacStr.split('-');
        ObjUsuario.fechaNacimientoUsuario = new Date(`${anio}-${mes}-${dia}`);
        ObjUsuario.telefonoUsuario = req.body.telefonoUsuario;
        ObjUsuario.direccionUsuario = req.body.direccionUsuario;
        ObjUsuario.idRol = req.body.idRol;
        UsuarioDAO.actualizar(ObjUsuario, res);
    }






}

const objUsuarioControlador = new UsuarioControlador();
export default objUsuarioControlador;


