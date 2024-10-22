import { Response, Request } from "express";
import Genero from "../entity/Genero";
import GeneroDAO from "../dao/GeneroDAO";


class GeneroControlador extends GeneroDAO{

    public obtenerGeneros(req: Request, res: Response){
        GeneroDAO.obtenerTodo([], res);
    }

    

    public agregarGenero(req: Request, res: Response): void {
        const objGenero: Genero = new Genero(0, "");
        objGenero.nombreGenero = req.body.nombreGenero;
        GeneroDAO.agregar(objGenero, res);
    }


    public borrarGenero(req: Request, res: Response):void{
        if(isNaN(Number(req.params.idGenero))){
            res.status(400).json({
                "mensaje": "El id del género debe ser un número"
            });
        }else{
            const codigo = Number(req.params.idGenero);
            const objGenero:Genero = new Genero(codigo, "");
            GeneroDAO.borrar(objGenero, res);
        }
    }   


    public actualizarGenero(req: Request, res: Response):void{
        const objGenero:Genero = new Genero(0, "");
        objGenero.idGenero = Number(req.body.idGenero);
        objGenero.nombreGenero = req.body.nombreGenero;
        GeneroDAO.actualizar(objGenero, res);
    }






}

const generoControlador = new GeneroControlador();
export default generoControlador;
