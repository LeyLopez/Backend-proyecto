import { Response, Request } from "express";
import Autor from "../entity/Autor";
import AutorDAO from "../dao/AutorDAO";


class AutorControlador extends AutorDAO{
    public obtenerAutores(req: Request, res: Response){
        AutorDAO.obtenerTodo([], res);
    }
}


const autorControlador = new AutorControlador();
export default autorControlador;

