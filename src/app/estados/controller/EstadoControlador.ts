import { Response, Request } from "express";
import Estado from "../entity/Estado";
import EstadoDAO from "../dao/EstadoDAO";

class EstadoControlador extends EstadoDAO{

}


const estadoControlador = new EstadoControlador();
export default estadoControlador;