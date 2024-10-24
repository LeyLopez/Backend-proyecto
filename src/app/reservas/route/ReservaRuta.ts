import { Router } from "express";
import controladorReserva from "../controller/ReservaControlador";

class ReservaRuta{
    public apiReservaRuta: Router;

    constructor(){
        this.apiReservaRuta = Router();
        this.configuracion();
    }

    private configuracion():void{
        this.apiReservaRuta.get("/getall", controladorReserva.obtenerReservas);
        this.apiReservaRuta.post("/add", controladorReserva.agregarReserva);
        this.apiReservaRuta.delete("/delete/:idReserva", controladorReserva.borrarReserva);
        this.apiReservaRuta.put("/update", controladorReserva.actualizarReserva);
    }
}

const reservaRuta = new ReservaRuta();
export default reservaRuta.apiReservaRuta;


