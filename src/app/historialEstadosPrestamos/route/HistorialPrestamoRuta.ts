import { Router } from "express";
import objHistorialPrestamoControlador from "../controller/HistorialPrestamoControlador";


class HistorialPrestamoRuta{

    public apiHistorialPrestamo: Router;

    constructor(){
        this.apiHistorialPrestamo = Router();
        this.configurarRuta();
    }


    public configurarRuta(){
        this.apiHistorialPrestamo.get("/getall", objHistorialPrestamoControlador.obtenerHistorialEstadosPrestamos);
        this.apiHistorialPrestamo.post("/add", objHistorialPrestamoControlador.agregarHistorialEstadoPrestamo);
        this.apiHistorialPrestamo.delete("/delete/:idHistorialEstadoPrestamo", objHistorialPrestamoControlador.borrarHistorialEstadoPrestamo);
        this.apiHistorialPrestamo.put("/update", objHistorialPrestamoControlador.actualizarHistorialEstadoPrestamo);
    }


}


const objHistorialPrestamoRuta = new HistorialPrestamoRuta();
export default objHistorialPrestamoRuta.apiHistorialPrestamo;
