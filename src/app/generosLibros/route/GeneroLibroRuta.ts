import { Router } from "express";
import generoLibroControlador from "../controller/GeneroLibroControlador";

class GeneroLibroRuta{
    public apiGeneroLibroRuta:Router;

    constructor(){
        this.apiGeneroLibroRuta = Router();
        this.misRutas();
    }

    private misRutas(){
        this.apiGeneroLibroRuta.get("/getall", generoLibroControlador.obtenerGenerosLibros);
    }

}

const generoLibroRuta = new GeneroLibroRuta();
export default generoLibroRuta.apiGeneroLibroRuta;