import { Response, Request } from "express";
import Autor from "../entity/Autor";
import AutorDAO from "../dao/AutorDAO";


class AutorControlador extends AutorDAO{


    public obtenerAutores(req: Request, res: Response){
        AutorDAO.obtenerTodo([], res);
    }




    public agregarAutor(req: Request, res: Response): void {
        const objAutor: Autor = new Autor(0, "", "", new Date());
        objAutor.nombreAutor = req.body.nombreAutor;
        objAutor.apellidoAutor = req.body.apellidoAutor;
    
        // Convertir la fecha en formato ISO
        const fechaNacStr = req.body.fechaNacimiento;
        const [dia, mes, anio] = fechaNacStr.split('-');
        objAutor.fechaNacimiento = new Date(`${anio}-${mes}-${dia}`);  // Formato YYYY-MM-DD
        
        AutorDAO.agregar(objAutor, res);
    }
    




    
    public borrarAutor(req: Request, res: Response):void{
        if(isNaN(Number(req.params.idAutor))){
            res.status(400).json({
                "mensaje": "El id del autor debe ser un número"
            });
        }else{
            const codigo = Number(req.params.idAutor);
            const objAutor:Autor = new Autor(codigo, "", "", new Date());
            AutorDAO.borrarAutor(objAutor, res);
        }
    }




    public actualizarAutor(req: Request, res: Response):void{
        const objAutor:Autor = new Autor(0, "", "", new Date());
        objAutor.idAutor = Number(req.body.idAutor);
        objAutor.nombreAutor = req.body.nombreAutor;
        objAutor.apellidoAutor = req.body.apellidoAutor;
        const fechaNacStr = req.body.fechaNacimiento;
        const [dia, mes, anio] = fechaNacStr.split('-');
        objAutor.fechaNacimiento = new Date(`${anio}-${mes}-${dia}`);
        AutorDAO.actualizar(objAutor, res);
    }




}


const autorControlador = new AutorControlador();
export default autorControlador;

