class Reserva{
    idReserva: number;
    fechaReserva: Date;
    fechaFinReserva: Date;
    idUsuario: number;
    idLibro: number;
    idEstado: number;

    constructor(idReserva: number, fechaReserva: Date, fechaFinReserva: Date, idUsuario: number, idLibro: number, idEstado: number){
        this.idReserva = idReserva;
        this.fechaReserva = fechaReserva;
        this.fechaFinReserva = fechaFinReserva;
        this.idUsuario = idUsuario;
        this.idLibro = idLibro;
        this.idEstado = idEstado;
    }

}

export  default Reserva;
