class HistorialPrestamo{

    idHistorialEstadoPrestamo: number;
    fechaCambioEstado: Date;
    idPrestamo: number;
    idEstado: number;



    constructor(idHistorialEstadoPrestamo: number, fechaCambioEstado: Date, idPrestamo: number, idEstado: number){
        this.idHistorialEstadoPrestamo = idHistorialEstadoPrestamo;
        this.fechaCambioEstado = fechaCambioEstado;
        this.idPrestamo = idPrestamo;
        this.idEstado = idEstado;
    }

}

export default HistorialPrestamo;