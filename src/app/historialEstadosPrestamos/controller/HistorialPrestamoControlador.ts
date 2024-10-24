import { Response, Request } from "express";
import HistorialPrestamoDAO from "../dao/HistorialPrestamoDAO";
import HistorialPrestamo from "../entity/HistorialPrestamo";



class HistorialPrestamoControlador extends HistorialPrestamoDAO{

    public obtenerHistorialEstadosPrestamos(req: Request, res: Response){
        HistorialPrestamoDAO.obtenerTodo(req.params, res);
    }


    public agregarHistorialEstadoPrestamo(req: Request, res: Response): void{
        const objHistorialEstadoPrestamo: HistorialPrestamo = new HistorialPrestamo(0, new Date(), 0, 0);
        const fechaCambioEstadoStr = req.body.fechaCambioEstado;
        const [dia, mes, anio] = fechaCambioEstadoStr.split('-');
        objHistorialEstadoPrestamo.fechaCambioEstado = new Date(`${anio}-${mes}-${dia}`);
        objHistorialEstadoPrestamo.idPrestamo = req.body.idPrestamo;
        objHistorialEstadoPrestamo.idEstado = req.body.idEstado;
        HistorialPrestamoDAO.agregar(objHistorialEstadoPrestamo, res);
    }


    public borrarHistorialEstadoPrestamo(req: Request, res: Response):void{
        if(isNaN(Number(req.params.idHistorialEstadoPrestamo))){
            res.status(400).json({
                "mensaje": "El id del historial de estado del préstamo debe ser un número"
            });
        }else{
            const codigo = Number(req.params.idHistorialEstadoPrestamo);
            const objHistorialEstadoPrestamo:HistorialPrestamo = new HistorialPrestamo(codigo, new Date(), 0, 0);
            HistorialPrestamoDAO.borrar(objHistorialEstadoPrestamo, res);
        }
    }



    public actualizarHistorialEstadoPrestamo(req: Request, res: Response):void{
        const objHistorialEstadoPrestamo:HistorialPrestamo = new HistorialPrestamo(0, new Date(), 0, 0);
        objHistorialEstadoPrestamo.idHistorialEstadoPrestamo = Number(req.body.idHistorialEstadoPrestamo);
        const fechaCambioEstadoStr = req.body.fechaCambioEstado;
        const [dia, mes, anio] = fechaCambioEstadoStr.split('-');
        objHistorialEstadoPrestamo.fechaCambioEstado = new Date(`${anio}-${mes}-${dia}`);
        objHistorialEstadoPrestamo.idPrestamo = req.body.idPrestamo;
        objHistorialEstadoPrestamo.idEstado = req.body.idEstado;
        HistorialPrestamoDAO.actualizar(objHistorialEstadoPrestamo, res);

    }


}

const objHistorialPrestamoControlador = new HistorialPrestamoControlador();
export default objHistorialPrestamoControlador;