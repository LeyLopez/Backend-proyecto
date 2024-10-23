export const SQL_LIBRO = {

    GET_ALL: "SELECT * FROM Libros",

    HOW_MANY:
    "SELECT COUNT(*) AS existe FROM Libros WHERE id_autor = $1",

    HOW_MANY_NAME:
    "SELECT COUNT(*) AS existe FROM Libros WHERE titulo_libro = $1",

    ADD: "INSERT INTO Libros(titulo_libro, resumen_libro, url_portada_libro, tipo_libro, fecha_publicacion_libro, \
    cantidad_ejemplares_libro, id_autor) VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING id_libro",

    DELETE: "DELETE FROM Libros WHERE id_libro = $1",

    UPDATE: "UPDATE Libros SET titulo_libro = $1, resumen_libro = $2, url_portada_libro = $3, tipo_libro = $4, \
    fecha_publicacion_libro = $5, cantidad_ejemplares_libro = $6, id_autor = $7 WHERE id_libro = $8 RETURNING id_libro",

}

