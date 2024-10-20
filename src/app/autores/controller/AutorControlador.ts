import { Response, Request } from "express";
import Autor from "../entity/Autor";
import AutorDAO from "../dao/AutorDAO";


class AutorControlador extends AutorDAO{

    public obtenerAutores(req: Request, res: Response){
        AutorDAO.obtenerTodo([], res);
    }



    public agregarAutor(req: Request, res: Response):void{
        const objAutor:Autor = new Autor(0, "", "", new Date());
        objAutor.nombreAutor = req.body.nombreAutor;
        objAutor.apellidoAutor = req.body.apellidoAutor;
        objAutor.fechaNacimiento = req.body.fechaNacimiento;
        AutorDAO.agregar(objAutor, res);

    }


    public actualizarAutor(req: Request, res: Response):void{
        const objAutor:Autor = new Autor(0, "", "", new Date());
        objAutor.idAutor = parseInt(req.params.idAutor);
        objAutor.nombreAutor = req.body.nombreAutor;
        objAutor.apellidoAutor = req.body.apellidoAutor;
        objAutor.fechaNacimiento = req.body.fechaNacimiento;
        AutorDAO.actualizar(objAutor, res);
    }

}


const autorControlador = new AutorControlador();
export default autorControlador;

