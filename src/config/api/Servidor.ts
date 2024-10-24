import cors from "cors";
import express from "express";
import morgan from "morgan";
import apiAutorRuta from "../../app/autores/route/AutorRuta";
import apiEstadoRuta from "../../app/estados/route/EstadoRuta";
import apiGeneroRuta from "../../app/generos/route/GeneroRuta";
import apiRolRuta from "../../app/roles/route/RolRuta";
import apiGeneroLibroRuta from "../../app/generosLibros/route/GeneroLibroRuta";
import apiLibroRuta from "../../app/libros/route/LibroRuta";
import apiUsuarioRuta from "../../app/usuarios/route/UsuarioRuta";
import apiPrestamoRuta from "../../app/prestamos/route/PrestamoRuta";
import apiReservaRuta from "../../app/reservas/route/ReservaRuta";

class Servidor{
    public app: express.Application;

    constructor(){
        this.app = express();
        this.cargarConfiguracion();
        this.exponerEndPoints();
    }


    public cargarConfiguracion():void{
        this.app.set("PORT", 3132);
        this.app.use(cors());
        this.app.use(morgan("dev"));
        this.app.use(express.json({limit: "50mb"}));
        this.app.use(express.urlencoded({extended: true}));
    }


    public exponerEndPoints():void{
        this.app.use("/api/authors", apiAutorRuta);
        this.app.use("/api/status", apiEstadoRuta);
        this.app.use("api/genres", apiGeneroRuta);
        this.app.use("api/role", apiRolRuta);
        this.app.use("api/bookgenre", apiGeneroLibroRuta);
        this.app.use("api/book", apiLibroRuta);
        this.app.use("api/user", apiUsuarioRuta);
        this.app.use("/api/loans", apiPrestamoRuta);
        this.app.use("/api/reservations", apiReservaRuta);

    }


    public iniciar(): void{
        this.app.listen(this.app.get("PORT"), ()=>{
            console.log("Servidor corriendo en el puerto: ", this.app.get("PORT"));
        });
    }

}

export default Servidor;