import { Router } from "express";
import controladorHistorialReservas from "../controller/HistorialReservasControlador";

class HistorialReservasRuta{
    public apiHistorialReservasRuta: Router;

    constructor(){
        this.apiHistorialReservasRuta = Router();
        this.configuracion();
    }

    private configuracion():void{
        this.apiHistorialReservasRuta.get("/getall", controladorHistorialReservas.obtenerHistorialEstadosReservas);
        this.apiHistorialReservasRuta.post("/add", controladorHistorialReservas.agregarHistorialEstadoReserva);
        this.apiHistorialReservasRuta.delete("/delete/:idHistorialEstadoReserva", controladorHistorialReservas.borrarHistorialEstadoReserva);
        this.apiHistorialReservasRuta.put("/update", controladorHistorialReservas.actualizarHistorialEstadoReserva);
    }
}


const historialReservasRuta = new HistorialReservasRuta();
export default historialReservasRuta.apiHistorialReservasRuta;