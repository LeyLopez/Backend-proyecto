import { Router } from "express";
import rolControlador from "../controller/RolControlador";


class RolRuta{
    public apiRolRuta:Router;

    constructor(){
        this.apiRolRuta = Router();
        this.misRutas();
    }

    private misRutas(){
        this.apiRolRuta.get("/getall", rolControlador.obtenerRoles);
        this.apiRolRuta.post("/add", rolControlador.agregarRol);
        this.apiRolRuta.delete("/delete/:idRol", rolControlador.borrarRol);
        this.apiRolRuta.put("/update", rolControlador.actualizarRol);
    }
}

const rolRuta = new RolRuta();
export default rolRuta.apiRolRuta;