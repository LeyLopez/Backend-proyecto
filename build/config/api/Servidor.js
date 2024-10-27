"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const AutorRuta_1 = __importDefault(require("../../app/autores/route/AutorRuta"));
const EstadoRuta_1 = __importDefault(require("../../app/estados/route/EstadoRuta"));
const GeneroRuta_1 = __importDefault(require("../../app/generos/route/GeneroRuta"));
const RolRuta_1 = __importDefault(require("../../app/roles/route/RolRuta"));
const GeneroLibroRuta_1 = __importDefault(require("../../app/generosLibros/route/GeneroLibroRuta"));
const LibroRuta_1 = __importDefault(require("../../app/libros/route/LibroRuta"));
const UsuarioRuta_1 = __importDefault(require("../../app/usuarios/route/UsuarioRuta"));
const PrestamoRuta_1 = __importDefault(require("../../app/prestamos/route/PrestamoRuta"));
const ReservaRuta_1 = __importDefault(require("../../app/reservas/route/ReservaRuta"));
const HistorialReservasRuta_1 = __importDefault(require("../../app/historialEstadosReservas/route/HistorialReservasRuta"));
const HistorialPrestamoRuta_1 = __importDefault(require("../../app/historialEstadosPrestamos/route/HistorialPrestamoRuta"));
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
        this.app.use("/api/status", EstadoRuta_1.default);
        this.app.use("api/genres", GeneroRuta_1.default);
        this.app.use("api/role", RolRuta_1.default);
        this.app.use("api/bookgenre", GeneroLibroRuta_1.default);
        this.app.use("api/book", LibroRuta_1.default);
        this.app.use("api/user", UsuarioRuta_1.default);
        this.app.use("/api/loans", PrestamoRuta_1.default);
        this.app.use("/api/reservations", ReservaRuta_1.default);
        this.app.use("/api/reservationshistory", HistorialReservasRuta_1.default);
        this.app.use("/api/loanshistory", HistorialPrestamoRuta_1.default);
    }
    iniciar() {
        this.app.listen(this.app.get("PORT"), () => {
            console.log("Servidor corriendo en el puerto: ", this.app.get("PORT"));
        });
    }
}
exports.default = Servidor;
