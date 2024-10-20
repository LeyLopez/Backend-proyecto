import cors from "cors";
import express from "express";
import morgan from "morgan";
import apiAutorRuta from "../../app/autores/route/AutorRuta";
import apiEstadoRuta from "../../app/estados/route/EstadoRuta";

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
    }


    public iniciar(): void{
        this.app.listen(this.app.get("PORT"), ()=>{
            console.log("Servidor corriendo en el puerto: ", this.app.get("PORT"));
        });
    }

}

export default Servidor;