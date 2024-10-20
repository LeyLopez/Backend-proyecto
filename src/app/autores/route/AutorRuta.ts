import { Router } from "express";
import AutorControlador from "../controller/AutorControlador";


class AutorRuta{
    public apiAutorRuta:Router;

    constructor(){
        this.apiAutorRuta = Router();
        this.misRutas();

    }

    private misRutas(){
        this.apiAutorRuta.get("/getall", AutorControlador.obtenerAutores);
        this.apiAutorRuta.post("/add", AutorControlador.agregarAutor);
        this.apiAutorRuta.delete("/delete/:idAutor", AutorControlador.borrarAutor);
        this.apiAutorRuta.put("/update", AutorControlador.actualizarAutor);

    }


}


const autorRuta = new AutorRuta();
export default autorRuta.apiAutorRuta;
