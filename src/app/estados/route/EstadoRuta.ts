import {Router} from "express";
import estadoControlador from "../controller/EstadoControlador";

class EstadoRuta{
    public apiEstadoRuta:Router;

    constructor(){
        this.apiEstadoRuta = Router();
        this.misRutas();
    }

    private misRutas(){
        this.apiEstadoRuta.get("/getall", estadoControlador.obtenerEstados);
        this.apiEstadoRuta.post("/add", estadoControlador.agregarEstado);
        this.apiEstadoRuta.delete("/delete/:idEstado", estadoControlador.borrarEstado);
        this.apiEstadoRuta.put("/update", estadoControlador.actualizarEstado);
        
    }
}

const estadoRuta = new EstadoRuta();
export default estadoRuta.apiEstadoRuta;