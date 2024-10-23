class Usuario{

    idUsuario: number;
    nombreUsuario: string;
    apellidoUsuario: string;
    emailUsuario: string;
    claveUsuario: string;
    tipoDocumentoUsuario: string;
    numeroDocumentoUsuario: string;
    fechaNacimientoUsuario: Date;
    telefonoUsuario: string;
    direccionUsuario: string;
    idRol: number;

    constructor(idUsuario: number, nombreUsuario: string, apellidoUsuario: string, emailUsuario: string, claveUsuario: string, tipoDocumentoUsuario: string, numeroDocumentoUsuario: string, fechaNacimientoUsuario: Date, telefonoUsuario: string, direccionUsuario: string, idRol: number){
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

export default Usuario;