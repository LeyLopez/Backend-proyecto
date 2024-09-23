-- Tabla: TipoDocumento
CREATE TABLE Tipos_documentos (
    id_tipo_documento INT PRIMARY KEY,
    nombre_tipo_documento VARCHAR(45)
);

-- Tabla: Personas
CREATE TABLE Personas (
    id_usuario INT PRIMARY KEY,
    num_documento INT,
    nombre_persona VARCHAR(45),
    apellido_persona VARCHAR(45),
    email_persona VARCHAR(45),
    telefono_persona INT,
    fecha_nacimiento DATE,
    id_tipo_documento INT,
    usuario VARCHAR(45),
    clave VARCHAR(45),
    id_rol INT,
    id_ubicacion INT,
    FOREIGN KEY (id_tipo_documento) REFERENCES Tipos_documentos(id_tipo_documento),
    FOREIGN KEY (id_rol) REFERENCES Roles(id_rol),
    FOREIGN KEY (id_ubicacion) REFERENCES Ubicaciones(id_ubicacion)
);

-- Tabla: Roles
CREATE TABLE Roles (
    id_rol INT PRIMARY KEY,
    nombre_rol VARCHAR(45),
    descripcion_rol VARCHAR(255)
);

-- Tabla: Ubicaciones
CREATE TABLE Ubicaciones (
    id_ubicacion INT PRIMARY KEY,
    nombre_ubicacion VARCHAR(45),
    id_padre INT,
    FOREIGN KEY (id_padre) REFERENCES Ubicaciones(id_ubicacion)
);


-- Tabla: Autor
CREATE TABLE Autores (
    id_autor INT PRIMARY KEY,
    nombre_autor VARCHAR(45),
    apellido_autor VARCHAR(45),
    fecha_nacimiento_autor DATE
);

-- Tabla: TipoDeLibro
CREATE TABLE Tipos_de_libros (
    id_tipo_de_libro INT PRIMARY KEY,
    nombre_tipo_libro VARCHAR(45),
    descripcion_tipo_libro VARCHAR(45)
);


-- Tabla: Libros
CREATE TABLE Libros (
    id_libro INT PRIMARY KEY,
    nombre_libro VARCHAR(45),
    cantidad_ejemplares INT,
    año_publicacion_libro INT,
    id_tipo_de_libro INT,
    id_autor INT,
    resumen_libro TIME,
    portada_libro LONGBLOB,
    FOREIGN KEY (id_tipo_de_libro) REFERENCES Tipos_de_libros(id_tipo_de_libro),
    FOREIGN KEY (id_autor) REFERENCES Autores(id_autor)
);


-- Tabla: Generos
CREATE TABLE Generos (
    id_genero INT PRIMARY KEY,
    nombre_genero VARCHAR(45)
);

-- Tabla: GenerosDeLosLibros
CREATE TABLE Generos_libros (
    id_libro INT,
    id_genero INT,
    PRIMARY KEY (idLibro, idGenero),
    FOREIGN KEY (idLibro) REFERENCES Libro(id_libro),
    FOREIGN KEY (idGenero) REFERENCES Genero(id_genero)
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
    fecha_realizacion_prestamo DATE,
    fecha_devolucion_prestamo DATE,
    id_usuario INT,
    FOREIGN KEY (id_usuario) REFERENCES Personas(id_usuario)
);

-- Tabla: TipoEstadosPrestamo
CREATE TABLE Tipo_estados_prestamos (
    id_tipo_estado_prestamo INT PRIMARY KEY,
    nombre_tipo_estado_prestamo VARCHAR(45)
);

-- Tabla: EstadoPrestamos
CREATE TABLE Estados_prestamos (
    id_tipo_estado_prestamo INT,
    id_prestamo INT,
    fecha_inicio_estado DATE,
    fecha_fin_estado DATE,
    PRIMARY KEY (id_tipo_estado_prestamo, id_prestamo),
    FOREIGN KEY (id_tipo_estado_prestamo) REFERENCES Tipos_estados_prestamos(id_tipo_estado_prestamo)
    FOREIGN KEY (id_prestamo) REFERENCES Prestamos(id_prestamo)
);


-- Tabla: TipoEstadoReserva
CREATE TABLE Tipos_estados_reservas (
    id_tipo_estado_reserva INT PRIMARY KEY,
    nombre_tipo_estado_reserva VARCHAR(45)
);


-- Tabla: EstadoReservas
CREATE TABLE Estados_reservas (
    id_reserva INT,
    id_tipo_estado INT,
    fecha_inicio_estado DATE,
    fecha_fin_estado DATE,
    PRIMARY KEY (id_reserva, id_tipo_estado),
    FOREIGN KEY (id_reserva) REFERENCES Reservas(id_reserva)
);




-- Tabla: LibrosDelPrestamo
CREATE TABLE Libros_del_prestamo (
    id_libro INT,
    id_prestamo INT,
    PRIMARY KEY (id_libro, id_prestamo),
    FOREIGN KEY (id_libro) REFERENCES Libros(id_libro),
    FOREIGN KEY (id_prestamo) REFERENCES Prestamos(id_prestamo)
);

-- Tabla: LibrosDeReserva
CREATE TABLE Libros_de_la_reserva (
    id_libro INT,
    id_reserva INT,
    PRIMARY KEY (id_libro, id_reserva),
    FOREIGN KEY (id_libro) REFERENCES Libros(id_libro),
    FOREIGN KEY (id_reserva) REFERENCES Reservas(id_reserva)
);








