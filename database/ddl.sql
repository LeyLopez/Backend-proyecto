CREATE TABLE Roles(
    id_rol SERIAL PRIMARY KEY,
    nombre_rol VARCHAR(50) NOT NULL,
    descripcion_rol VARCHAR(255) NOT NULL
);


CREATE TABLE Generos(
    id_genero SERIAL PRIMARY KEY,
    nombre_genero VARCHAR(50) NOT NULL
);


CREATE TABLE Autores(
    id_autor SERIAL PRIMARY KEY,
    nombre_autor VARCHAR(50) NOT NULL,
    apellido_autor VARCHAR(50) NOT NULL,
    fecha_nacimiento_autor DATE NOT NULL
);


CREATE TABLE Libros(
    id_libro SERIAL PRIMARY KEY,
    titulo_libro VARCHAR(50) NOT NULL,
    resumen_libro VARCHAR(1000) NOT NULL,
    url_portada_libro VARCHAR(500) NOT NULL,
    tipo_libro ENUM('Libro', 'Revista', 'Comic', 'Manga', 'Periodico') NOT NULL,
    fecha_publicacion_libro DATE NOT NULL,
    cantidad_ejemplares_libro INTEGER NOT NULL,
    id_autor INTEGER NOT NULL,
    FOREIGN KEY (id_autor) REFERENCES Autores(id_autor)
);

CREATE TABLE Generos_libros(
    id_libro INTEGER NOT NULL,
    id_genero INTEGER NOT NULL,
    FOREIGN KEY (id_libro) REFERENCES Libros(id_libro),
    FOREIGN KEY (id_genero) REFERENCES Generos(id_genero)
);



CREATE TABLE Usuarios(
    id_usuario SERIAL PRIMARY KEY,
    nombre_usuario VARCHAR(50) NOT NULL,
    apellido_usuario VARCHAR(50) NOT NULL,
    email_usuario VARCHAR(50) NOT NULL,
    clave_usuario VARCHAR(50) NOT NULL,
    tipo_documento_usuario VARCHAR(50) NOT NULL,
    numero_documento_usuario INT NOT NULL,
    fecha_nacimiento_usuario DATE NOT NULL,
    telefono_usuario VARCHAR(50) NOT NULL,
    direccion_usuario VARCHAR(50) NOT NULL,
    id_rol INTEGER NOT NULL,
    FOREIGN KEY (id_rol) REFERENCES Roles(id_rol)
);




CREATE TABLE Estados(
    id_estado SERIAL PRIMARY KEY,
    nombre_estado VARCHAR(50) NOT NULL,
    descripcion_estado VARCHAR(255) NOT NULL
);



CREATE TABLE Prestamos(
    id_prestamo SERIAL PRIMARY KEY,
    fecha_prestamo DATE NOT NULL,
    fecha_devolucion DATE NOT NULL,
    id_usuario INTEGER NOT NULL,
    id_libro INTEGER NOT NULL,
    id_estado INTEGER NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (id_usuario) REFERENCES Usuarios(id_usuario),
    FOREIGN KEY (id_libro) REFERENCES Libros(id_libro),
    FOREIGN KEY (id_estado) REFERENCES Estados(id_estado)

);

CREATE INDEX idx_prestamos_usuario ON Prestamos(id_usuario);
CREATE INDEX idx_prestamos_libro ON Prestamos(id_libro);





CREATE TABLE Reservas(
    id_reserva SERIAL PRIMARY KEY,
    fecha_reserva DATE NOT NULL,
    fecha_fin_reserva DATE NOT NULL,
    id_usuario INTEGER NOT NULL,
    id_libro INTEGER NOT NULL,
    id_estado INTEGER NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (id_usuario) REFERENCES Usuarios(id_usuario),
    FOREIGN KEY (id_libro) REFERENCES Libros(id_libro),
    FOREIGN KEY (id_estado) REFERENCES Estados(id_estado)
);

CREATE INDEX idx_reservas_usuario ON Reservas(id_usuario);
CREATE INDEX idx_reservas_libro ON Reservas(id_libro);


CREATE TABLE Historial_estados_prestamos(
    id_historial_estado_prestamo SERIAL PRIMARY KEY,
    fecha_cambio_estado DATE NOT NULL,
    id_prestamo INTEGER NOT NULL,
    id_estado INTEGER NOT NULL,
    FOREIGN KEY (id_prestamo) REFERENCES Prestamos(id_prestamo),
    FOREIGN KEY (id_estado) REFERENCES Estados(id_estado)
);


CREATE TABLE Historial_estados_reservas(
    id_historial_estado_reserva SERIAL PRIMARY KEY,
    fecha_cambio_estado DATE NOT NULL,
    id_reserva INTEGER NOT NULL,
    id_estado INTEGER NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (id_reserva) REFERENCES Reservas(id_reserva),
    FOREIGN KEY (id_estado) REFERENCES Estados(id_estado)
);







