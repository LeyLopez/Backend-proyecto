import { Response, Request } from "express";
import HistorialEstadosReservasDAO from "../dao/HistorialReservasDAO";
import HistorialEstadoReserva from "../entity/HistorialReserva";

class HistorialReservasControlador extends HistorialEstadosReservasDAO{

    public obtenerHistorialEstadosReservas(req: Request, res: Response){
        HistorialEstadosReservasDAO.obtenerTodo(req.params, res);
    }


    public agregarHistorialEstadoReserva(req: Request, res: Response): void{
        const objHistorialEstadoReserva: HistorialEstadoReserva = new HistorialEstadoReserva(0, new Date(), 0, 0);
        const fechaCambioEstadoStr = req.body.fechaCambioEstado;
        const [dia, mes, anio] = fechaCambioEstadoStr.split('-');
        objHistorialEstadoReserva.fechaCambioEstado = new Date(`${anio}-${mes}-${dia}`);
        objHistorialEstadoReserva.idReserva = req.body.idReserva;
        objHistorialEstadoReserva.idEstado = req.body.idEstado;
        HistorialEstadosReservasDAO.agregar(objHistorialEstadoReserva, res);
    }


    public borrarHistorialEstadoReserva(req: Request, res: Response):void{
        if(isNaN(Number(req.params.idHistorialEstadoReserva))){
            res.status(400).json({
                "mensaje": "El id del historial de estado de la reserva debe ser un número"
            });
        }else{
            const codigo = Number(req.params.idHistorialEstadoReserva);
            const objHistorialEstadoReserva:HistorialEstadoReserva = new HistorialEstadoReserva(codigo, new Date(), 0, 0);
            HistorialEstadosReservasDAO.borrar(objHistorialEstadoReserva, res);
        }
    }


    public actualizarHistorialEstadoReserva(req: Request, res: Response):void{
        const objHistorialEstadoReserva:HistorialEstadoReserva = new HistorialEstadoReserva(0, new Date(), 0, 0);
        objHistorialEstadoReserva.idHistorialEstadoReserva = Number(req.body.idHistorialEstadoReserva);
        const fechaCambioEstadoStr = req.body.fechaCambioEstado;
        const [dia, mes, anio] = fechaCambioEstadoStr.split('-');
        objHistorialEstadoReserva.fechaCambioEstado = new Date(`${anio}-${mes}-${dia}`);
        objHistorialEstadoReserva.idReserva = req.body.idReserva;
        objHistorialEstadoReserva.idEstado = req.body.idEstado;
        HistorialEstadosReservasDAO.actualizar(objHistorialEstadoReserva, res);
    }
    
    

}

const objHistorialReservasControlador = new HistorialReservasControlador();
export default objHistorialReservasControlador;