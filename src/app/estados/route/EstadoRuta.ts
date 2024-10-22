import {Router} from "express";
import estadoControlador from "../controller/EstadoControlador";

class EstadoRuta{
    public apiEstadoRuta:Router;

    constructor(){
        this.apiEstadoRuta = Router();
        this.misRutas();
    }

    private misRutas(){
        this.apiEstadoRuta.get("/", estadoControlador.obtenerEstados);
        this.apiEstadoRuta.post("/", estadoControlador.agregarEstado);
        this.apiEstadoRuta.delete("/:idEstado", estadoControlador.borrarEstado);
        this.apiEstadoRuta.put("/", estadoControlador.actualizarEstado);
        
    }
}

const estadoRuta = new EstadoRuta();
export default estadoRuta.apiEstadoRuta;