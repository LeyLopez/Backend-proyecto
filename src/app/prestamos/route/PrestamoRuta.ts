import { Router } from "express";
import objPrestamoControlador from "../controller/PrestamoControlador";


class PrestamoRuta{
    public apiPrestamoRuta: Router;
    

    constructor(){
        this.apiPrestamoRuta = Router();
        this.configuracion();
    }

    private configuracion(): void{
        this.apiPrestamoRuta.get("/getall", objPrestamoControlador.obtenerPrestamos);
        this.apiPrestamoRuta.post("/add", objPrestamoControlador.agregarPrestamo);
        this.apiPrestamoRuta.delete("/delete/:idPrestamo", objPrestamoControlador.borrarPrestamo);
        this.apiPrestamoRuta.put("/update", objPrestamoControlador.actualizarPrestamo);
    }

}

const objPrestamoRuta = new PrestamoRuta();
export default objPrestamoRuta.apiPrestamoRuta;
