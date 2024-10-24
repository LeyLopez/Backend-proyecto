class Prestamo{

    idPrestamo: Number;
    fechaPrestamo: Date;
    fechaDevolucion: Date;
    idUsuario: Number;
    idLibro: Number;
    idEstado: Number;


    constructor(idPrestamo: Number, fechaPrestamo: Date, fechaDevolucion: Date, idUsuario: Number, idLibro: Number, idEstado: Number){
        this.idPrestamo = idPrestamo;
        this.fechaPrestamo = fechaPrestamo;
        this.fechaDevolucion = fechaDevolucion;
        this.idUsuario = idUsuario;
        this.idLibro = idLibro;
        this.idEstado = idEstado;
    }

}

export default Prestamo;