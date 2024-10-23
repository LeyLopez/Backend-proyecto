import { Response, Request } from "express";
import Rol from "../entity/Rol";
import RolDAO from "../dao/RolDAO";


class RolControlador extends RolDAO{

    public obtenerRoles(req: Request, res: Response){
        RolDAO.obtenerTodo([], res);
    }

    

    public agregarRol(req: Request, res: Response): void {
        const objRol: Rol = new Rol(0, "", "");
        objRol.nombreRol = req.body.nombreRol;
        objRol.descripcionRol = req.body.descripcionRol;
        RolDAO.agregar(objRol, res);
    }


    public borrarRol(req: Request, res: Response):void{
        if(isNaN(Number(req.params.idRol))){
            res.status(400).json({
                "mensaje": "El id del rol debe ser un número"
            });
        }else{
            const codigo = Number(req.params.idRol);
            const objRol:Rol = new Rol(codigo, "", "");
            RolDAO.borrar(objRol, res);
        }
    } 




    public actualizarRol(req: Request, res: Response):void{
        const objRol:Rol = new Rol(0, "", "");
        objRol.idRol = Number(req.body.idRol);
        objRol.nombreRol = req.body.nombreRol;
        objRol.descripcionRol = req.body.descripcionRol;
        RolDAO.actualizar(objRol, res);
    }





}

const rolControlador = new RolControlador();
export default rolControlador;
