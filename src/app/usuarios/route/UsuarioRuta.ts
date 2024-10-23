import { Router } from "express";
import objUsuarioControlador from "../controller/UsuarioControlador";


class UsuarioRuta{
    public apiUsuarioRuta: Router;
    

    constructor(){
        this.apiUsuarioRuta = Router();
        this.configuracion();
    }

    private configuracion(): void{
        this.apiUsuarioRuta.get("/getall", objUsuarioControlador.obtenerUsuarios);
        this.apiUsuarioRuta.post("/add", objUsuarioControlador.agregarUsuario);
        this.apiUsuarioRuta.delete("/delete/:idUsuario", objUsuarioControlador.borrarUsuario);
        this.apiUsuarioRuta.put("/update", objUsuarioControlador.actualizarUsuario);
    }
}

const objUsuarioRuta = new UsuarioRuta();
export default objUsuarioRuta.apiUsuarioRuta;
