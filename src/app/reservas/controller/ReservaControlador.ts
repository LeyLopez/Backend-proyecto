import { Response, Request } from "express";
import ReservaDAO from "../dao/ReservaDAO";
import Reserva from "../entity/Reserva";


class ReservaControlador extends ReservaDAO{

    public obtenerReservas(req: Request, res: Response){
        ReservaDAO.obtenerTodo([], res);
    }


    public agregarReserva(req: Request, res: Response): void {
        const ObjReserva: Reserva = new Reserva(0, new Date(), new Date(), 0, 0, 0);

        const fechaReservaStr = req.body.fechaReserva;
        const [diaR, mesR, anioR] = fechaReservaStr.split('-');
        ObjReserva.fechaReserva = new Date(`${anioR}-${mesR}-${diaR}`);

        const fechaFinReservaStr = req.body.fechaFinReserva;
        const [diaF, mesF, anioF] = fechaFinReservaStr.split('-');
        ObjReserva.fechaFinReserva = new Date(`${anioF}-${mesF}-${diaF}`);

        ObjReserva.idUsuario = req.body.idUsuario;
        ObjReserva.idLibro = req.body.idLibro;
        ObjReserva.idEstado = req.body.idEstado;
        ReservaDAO.agregar(ObjReserva, res);
    }



    public borrarReserva(req: Request, res: Response):void{
        if(isNaN(Number(req.params.idReserva))){
            res.status(400).json({
                "mensaje": "El id de la reserva debe ser un número"
            });
        }else{
            const codigo = Number(req.params.idReserva);
            const ObjReserva:Reserva = new Reserva(codigo, new Date(), new Date(), 0, 0, 0);
            ReservaDAO.borrar(ObjReserva, res);
        }
    }


    public actualizarReserva(req: Request, res: Response):void{
        const ObjReserva:Reserva = new Reserva(0, new Date(), new Date(), 0, 0, 0);
        ObjReserva.idReserva = Number(req.body.idReserva);

        const fechaReservaStr = req.body.fechaReserva;
        const [diaR, mesR, anioR] = fechaReservaStr.split('-');
        ObjReserva.fechaReserva = new Date(`${anioR}-${mesR}-${diaR}`);

        const fechaFinReservaStr = req.body.fechaFinReserva;
        const [diaF, mesF, anioF] = fechaFinReservaStr.split('-');
        ObjReserva.fechaFinReserva = new Date(`${anioF}-${mesF}-${diaF}`);

        ObjReserva.idUsuario = req.body.idUsuario;
        ObjReserva.idLibro = req.body.idLibro;
        ObjReserva.idEstado = req.body.idEstado;
        ReservaDAO.actualizar(ObjReserva, res);
    }



}

const controladorReserva = new ReservaControlador();
export default controladorReserva;
