import {Router} from "express";
import estadoControlador from "../controller/EstadoControlador";

class EstadoRuta{
    public apiEstadoRuta:Router;

    constructor(){
        this.apiEstadoRuta = Router();
        this.misRutas();
    }

    private misRutas(){
        
    }
}

const estadoRuta = new EstadoRuta();
export default estadoRuta.apiEstadoRuta;