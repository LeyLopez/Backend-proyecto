import { Router } from "express";
import LibroControlador from "../controller/LibroControlador";


class LibroRuta{
    public apiLibroRuta: Router;
    

    constructor(){
        this.apiLibroRuta = Router();
        this.configuracion();
    }

    private configuracion(): void{
        this.apiLibroRuta.get("/getall", LibroControlador.obtenerLibros);
        this.apiLibroRuta.post("/add", LibroControlador.agregarLibro);
        this.apiLibroRuta.delete("/delete/:idLibro", LibroControlador.borrarLibro);
        this.apiLibroRuta.put("/update", LibroControlador.actualizarLibro);
    }
}

const objLibroRuta = new LibroRuta();
export default objLibroRuta.apiLibroRuta;

