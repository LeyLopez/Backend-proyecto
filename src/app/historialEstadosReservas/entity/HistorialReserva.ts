class HistorialEstadoReserva{
    idHistorialEstadoReserva: number;
    fechaCambioEstado: Date;
    idReserva: number;
    idEstado: number;



    constructor(idHistorialEstadoReserva: number, fechaCambioEstado: Date, idReserva: number, idEstado: number){
        this.idHistorialEstadoReserva = idHistorialEstadoReserva;
        this.fechaCambioEstado = fechaCambioEstado;
        this.idReserva = idReserva;
        this.idEstado = idEstado;
    }


}


export default HistorialEstadoReserva;