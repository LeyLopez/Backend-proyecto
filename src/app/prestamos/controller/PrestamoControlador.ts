import { Response, Request } from "express";    
import PrestamoDAO from "../dao/PrestamoDAO";
import Prestamo from "../entity/Prestamo";


class PrestamoControlador extends PrestamoDAO{

    public obtenerPrestamos(req: Request, res: Response){
        PrestamoDAO.obtenerTodo([], res);
    }


    public agregarPrestamo(req: Request, res: Response): void {
        const ObjPrestamo: Prestamo = new Prestamo(0, new Date(), new Date(), 0, 0, 0);

        const fechaPrestamoStr = req.body.fechaPrestamo;
        const [diaP, mesP, anioP] = fechaPrestamoStr.split('-');
        ObjPrestamo.fechaPrestamo = new Date(`${anioP}-${mesP}-${diaP}`);

        const fechaDevolucionStr = req.body.fechaDevolucion;
        const [diaD, mesD, anioD] = fechaDevolucionStr.split('-');
        ObjPrestamo.fechaDevolucion = new Date(`${anioD}-${mesD}-${diaD}`);

        ObjPrestamo.idUsuario = req.body.idUsuario;
        ObjPrestamo.idLibro = req.body.idLibro;
        ObjPrestamo.idEstado = req.body.idEstado;
        PrestamoDAO.agregar(ObjPrestamo, res);
    }


    public borrarPrestamo(req: Request, res: Response):void{
        if(isNaN(Number(req.params.idPrestamo))){
            res.status(400).json({
                "mensaje": "El id del prestamo debe ser un número"
            });
        }else{
            const codigo = Number(req.params.idPrestamo);
            const ObjPrestamo:Prestamo = new Prestamo(codigo, new Date(), new Date(), 0, 0, 0);
            PrestamoDAO.borrar(ObjPrestamo, res);
        }
    }


    public actualizarPrestamo(req: Request, res: Response):void{
        const ObjPrestamo:Prestamo = new Prestamo(0, new Date(), new Date(), 0, 0, 0);
        ObjPrestamo.idPrestamo = Number(req.body.idPrestamo);

        const fechaPrestamoStr = req.body.fechaPrestamo;
        const [diaP, mesP, anioP] = fechaPrestamoStr.split('-');
        ObjPrestamo.fechaPrestamo = new Date(`${anioP}-${mesP}-${diaP}`);

        const fechaDevolucionStr = req.body.fechaDevolucion;
        const [diaD, mesD, anioD] = fechaDevolucionStr.split('-');
        ObjPrestamo.fechaDevolucion = new Date(`${anioD}-${mesD}-${diaD}`);

        ObjPrestamo.idUsuario = req.body.idUsuario;
        ObjPrestamo.idLibro = req.body.idLibro;
        ObjPrestamo.idEstado = req.body.idEstado;
        PrestamoDAO.actualizar(ObjPrestamo, res);
    }




}


const objPrestamoControlador = new PrestamoControlador();
export default objPrestamoControlador;