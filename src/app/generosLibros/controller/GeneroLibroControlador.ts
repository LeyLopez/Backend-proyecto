import { Response, Request } from "express";
import GeneroLibro from "../entity/GeneroLibro";
import GeneroLibroDAO from "../dao/GeneroLibroDAO";


class GeneroLibroControlador extends GeneroLibroDAO{

    public obtenerGenerosLibros(req: Request, res: Response){
        GeneroLibroDAO.obtenerTodo([], res);
    }

    
}

const generoLibroControlador = new GeneroLibroControlador();
export default generoLibroControlador;
