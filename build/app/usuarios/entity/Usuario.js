"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Usuario {
    constructor(idUsuario, nombreUsuario, apellidoUsuario, emailUsuario, claveUsuario, tipoDocumentoUsuario, numeroDocumentoUsuario, fechaNacimientoUsuario, telefonoUsuario, direccionUsuario, idRol) {
        this.idUsuario = idUsuario;
        this.nombreUsuario = nombreUsuario;
        this.apellidoUsuario = apellidoUsuario;
        this.emailUsuario = emailUsuario;
        this.claveUsuario = claveUsuario;
        this.tipoDocumentoUsuario = tipoDocumentoUsuario;
        this.numeroDocumentoUsuario = numeroDocumentoUsuario;
        this.fechaNacimientoUsuario = fechaNacimientoUsuario;
        this.telefonoUsuario = telefonoUsuario;
        this.direccionUsuario = direccionUsuario;
        this.idRol = idRol;
    }
}
exports.default = Usuario;
