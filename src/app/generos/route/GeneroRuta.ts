import { Router } from "express";
import generoControlador from "../controller/GeneroControlador";

class GeneroRuta{
    public apiGeneroRuta:Router;

    constructor(){
        this.apiGeneroRuta = Router();
        this.misRutas();
    }

    private misRutas(){
        this.apiGeneroRuta.get("/getall", generoControlador.obtenerGeneros);
        this.apiGeneroRuta.post("/add", generoControlador.agregarGenero);
        this.apiGeneroRuta.delete("/delete/:idGenero", generoControlador.borrarGenero);
        this.apiGeneroRuta.put("/update", generoControlador.actualizarGenero);
    }
}

const generoRuta = new GeneroRuta();
export default generoRuta.apiGeneroRuta;
