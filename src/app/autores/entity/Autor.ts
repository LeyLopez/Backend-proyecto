class Autor{
    public idAutor: number;
    public nombreAutor: string;
    public apellidoAutor: string;
    public fechaNacimiento: Date;



    constructor(idAutor: number, nombreAutor: string, apellidoAutor: string, fechaNacimiento: Date){
        this.idAutor = idAutor;
        this.nombreAutor = nombreAutor;
        this.apellidoAutor = apellidoAutor;
        this.fechaNacimiento = fechaNacimiento;
    }
}


export default Autor;
