-- Tabla: TipoDocumento
CREATE TABLE Tipo_documentos (
    id_tipo_documento INT PRIMARY KEY,
    nombre VARCHAR(45)
);

-- Tabla: Personas
CREATE TABLE Personas (
    id_usuario INT PRIMARY KEY,
    num_documento INT,
    nombre VARCHAR(45),
    apellido VARCHAR(45),
    email VARCHAR(45),
    telefono INT,
    fecha_nacimiento DATE,
    id_tipo_documento INT,
    usuario VARCHAR(45),
    clave VARCHAR(45),
    id_rol INT,
    id_ubicacion INT,
    FOREIGN KEY (id_tipo_documento) REFERENCES Tipo_documentos(id_tipo_documento),
    FOREIGN KEY (id_rol) REFERENCES Roles(id_rol),
    FOREIGN KEY (id_ubicacion) REFERENCES Ubicaciones(id_ubicacion)
);

-- Tabla: Roles
CREATE TABLE Roles (
    id_rol INT PRIMARY KEY,
    nombre VARCHAR(45),
    descripcion VARCHAR(255)
);

-- Tabla: Ubicaciones
CREATE TABLE Ubicaciones (
    id_ubicacion INT PRIMARY KEY,
    nombre VARCHAR(45),
    id_padre INT,
    FOREIGN KEY (id_padre) REFERENCES Ubicaciones(id_ubicacion)
);

-- Tabla: Reserva
CREATE TABLE Reservas (
    id_reserva INT PRIMARY KEY,
    fecha_reserva DATE,
    fecha_envio_intento_reserva DATE,
    id_usuario INT,
    FOREIGN KEY (id_usuario) REFERENCES Personas(id_usuario)
);

-- Tabla: Prestamo
CREATE TABLE Prestamos (
    id_prestamo INT PRIMARY KEY,
    fecha_realizacion DATE,
    fecha_devolucion DATE,
    id_usuario INT,
    FOREIGN KEY (id_usuario) REFERENCES Personas(id_usuario)
);

-- Tabla: EstadoPrestamos
CREATE TABLE Estados_prestamos (
    id_tipo_estado INT,
    id_prestamo INT,
    fecha_inicio_estado DATE,
    fecha_fin_estado DATE,
    PRIMARY KEY (id_tipo_estado, id_prestamo),
    FOREIGN KEY (id_prestamo) REFERENCES Prestamos(id_prestamo)
);

-- Tabla: TipoEstadosPrestamo
CREATE TABLE Tipo_estados_prestamos (
    id_tipo_estado_prestamo INT PRIMARY KEY,
    nombre VARCHAR(45)
);

-- Tabla: EstadoReservas
CREATE TABLE Estados_reservas (
    idReserva INT,
    idTipoEstado INT,
    fechaInicioEstado DATE,
    fechaFinEstado DATE,
    PRIMARY KEY (idReserva, idTipoEstado),
    FOREIGN KEY (idReserva) REFERENCES Reserva(idReserva)
);

-- Tabla: TipoEstadoReserva
CREATE TABLE Tipos_estados_reservas (
    idTipoEstadoReserva INT PRIMARY KEY,
    nombre VARCHAR(45)
);

-- Tabla: Libros
CREATE TABLE Libros (
    idLibro INT PRIMARY KEY,
    nombre VARCHAR(45),
    cantidadEjemplares INT,
    añoPublicacion INT,
    idTipoDebluro INT,
    idAutor INT,
    resumen TIME,
    portada LONGBLOB,
    FOREIGN KEY (idTipoDebluro) REFERENCES TipoDeLibro(idTipoDebluro),
    FOREIGN KEY (idAutor) REFERENCES Autor(idAutor)
);

-- Tabla: LibrosDelPrestamo
CREATE TABLE LibrosDelPrestamo (
    idLibro INT,
    idPrestamo INT,
    PRIMARY KEY (idLibro, idPrestamo),
    FOREIGN KEY (idLibro) REFERENCES Libro(idLibro),
    FOREIGN KEY (idPrestamo) REFERENCES Prestamo(idPrestamo)
);

-- Tabla: LibrosDeReserva
CREATE TABLE LibrosDeReserva (
    idLibro INT,
    idReserva INT,
    PRIMARY KEY (idLibro, idReserva),
    FOREIGN KEY (idLibro) REFERENCES Libro(idLibro),
    FOREIGN KEY (idReserva) REFERENCES Reserva(idReserva)
);

-- Tabla: Generos
CREATE TABLE Generos (
    idGenero INT PRIMARY KEY,
    nombre VARCHAR(45)
);

-- Tabla: GenerosDeLosLibros
CREATE TABLE GenerosDeLosLibros (
    idLibro INT,
    idGenero INT,
    PRIMARY KEY (idLibro, idGenero),
    FOREIGN KEY (idLibro) REFERENCES Libro(idLibro),
    FOREIGN KEY (idGenero) REFERENCES Genero(idGenero)
);

-- Tabla: Autor
CREATE TABLE Autores (
    idAutor INT PRIMARY KEY,
    nombre VARCHAR(45),
    apellido VARCHAR(45),
    fechaNacimiento DATE
);

-- Tabla: TipoDeLibro
CREATE TABLE Tipos_de_libros (
    idTipoDebluro INT PRIMARY KEY,
    nombre VARCHAR(45),
    descripcion VARCHAR(45)
);




