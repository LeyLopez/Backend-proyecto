import { Response, Request } from "express";
import Estado from "../entity/Estado";
import EstadoDAO from "../dao/EstadoDAO";

class EstadoControlador extends EstadoDAO{


    public obtenerEstados(req: Request, res: Response){
        EstadoDAO.obtenerTodo([], res);
    }


    public agregarEstado(req: Request, res: Response): void {
        const objEstado: Estado = new Estado(0, "", "");
        objEstado.nombreEstado = req.body.nombreEstado;
        objEstado.desccripcionEstado = req.body.desccripcionEstado;
        EstadoDAO.agregar(objEstado, res);
    }


    public borrarEstado(req: Request, res: Response):void{
        if(isNaN(Number(req.params.idEstado))){
            res.status(400).json({
                "mensaje": "El id del estado debe ser un número"
            });
        }else{
            const codigo = Number(req.params.idEstado);
            const objEstado:Estado = new Estado(codigo, "", "");
            EstadoDAO.borrar(objEstado, res);
        }
    }



    public actualizarEstado(req: Request, res: Response):void{
        const objEstado:Estado = new Estado(0, "", "");
        objEstado.idEstado = Number(req.body.idEstado);
        objEstado.nombreEstado = req.body.nombreEstado;
        objEstado.desccripcionEstado = req.body.desccripcionEstado;
        EstadoDAO.actualizar(objEstado, res);
    }

    


}


const estadoControlador = new EstadoControlador();
export default estadoControlador;