import { Response, Request } from "express";
import Libro from "../entity/Libro";
import LibroDAO from "../dao/LibroDAO";


class LibroControlador extends LibroDAO{


    public obtenerLibros(req: Request, res: Response){
        LibroDAO.obtenerTodo([], res);
    }


    public agregarLibro(req: Request, res: Response): void {
        const objLibro: Libro = new Libro(0, "", "", "", "", new Date(), 0, 0);
        objLibro.tituloLibro = req.body.tituloLibro;
        objLibro.resumenLibro = req.body.resumenLibro;
        objLibro.urlPortadaLibro = req.body.urlPortadaLibro;
        objLibro.tipoLibro = req.body.tipoLibro;
        const fechaPubStr = req.body.fechaPublicacion;
        const [dia, mes, anio] = fechaPubStr.split('-');
        objLibro.fechaPublicacion = new Date(`${anio}-${mes}-${dia}`);  // Formato YYYY-MM-DD
        objLibro.cantidadEjemplares = req.body.cantidadEjemplares;
        objLibro.idAutor = req.body.idAutor;
        LibroDAO.agregar(objLibro, res);
    }


    public borrarLibro(req: Request, res: Response):void{
        if(isNaN(Number(req.params.idLibro))){
            res.status(400).json({
                "mensaje": "El id del libro debe ser un número"
            });
        }else{
            const codigo = Number(req.params.idLibro);
            const objLibro:Libro = new Libro(codigo, "", "", "", "", new Date(), 0, 0);
            LibroDAO.borrar(objLibro, res);
        }
    }


    public actualizarLibro(req: Request, res: Response):void{
        const objLibro:Libro = new Libro(0, "", "", "", "", new Date(), 0, 0);
        objLibro.idLibro = Number(req.body.idLibro);
        objLibro.tituloLibro = req.body.tituloLibro;
        objLibro.resumenLibro = req.body.resumenLibro;
        objLibro.urlPortadaLibro = req.body.urlPortadaLibro;
        objLibro.tipoLibro = req.body.tipoLibro;
        const fechaPubStr = req.body.fechaPublicacion;
        const [dia, mes, anio] = fechaPubStr.split('-');
        objLibro.fechaPublicacion = new Date(`${anio}-${mes}-${dia}`);
        objLibro.cantidadEjemplares = req.body.cantidadEjemplares;
        objLibro.idAutor = req.body.idAutor;
        LibroDAO.actualizar(objLibro, res);
    }



}

const libroControlador = new LibroControlador();
export default libroControlador;
