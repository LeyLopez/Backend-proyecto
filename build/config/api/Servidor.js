"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const AutorRuta_1 = __importDefault(require("../../app/autores/route/AutorRuta"));
class Servidor {
    constructor() {
        this.app = (0, express_1.default)();
        this.cargarConfiguracion();
        this.exponerEndPoints();
    }
    cargarConfiguracion() {
        this.app.set("PORT", 3132);
        this.app.use((0, cors_1.default)());
        this.app.use((0, morgan_1.default)("dev"));
        this.app.use(express_1.default.json({ limit: "50mb" }));
        this.app.use(express_1.default.urlencoded({ extended: true }));
    }
    exponerEndPoints() {
        this.app.use("/api/authors", AutorRuta_1.default);
    }
    iniciar() {
        this.app.listen(this.app.get("PORT"), () => {
            console.log("Servidor corriendo en el puerto: ", this.app.get("PORT"));
        });
    }
}
exports.default = Servidor;
