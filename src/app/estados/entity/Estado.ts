class Estado{
    public idEstado: number;
    public nombreEstado: string;
    public descripcionEstado: string;


    constructor(idEstado: number, nombreEstado: string, desccripcionEstado: string){
        this.idEstado = idEstado;
        this.nombreEstado = nombreEstado;
        this.descripcionEstado = desccripcionEstado;
    }


}


export default Estado;