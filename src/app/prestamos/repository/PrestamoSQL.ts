export const SQL_PRESTAMO = {

    GET_ALL: "SELECT * FROM Prestamos",

    ADD: "INSERT INTO Prestamos(fecha_prestamo, fecha_devolucion, id_usuario, id_libro, id_estado) \
    VALUES($1, $2, $3, $4, $5) RETURNING id_prestamo",


    HOW_MANY: "SELECT COUNT(*) AS existe FROM Prestamos WHERE id_prestamo = $1",

    HOW_MANY_USER: "SELECT COUNT(*) AS existe FROM Prestamos WHERE id_usuario = $1 AND id_libro = $2",


    DELETE: "DELETE FROM Prestamos WHERE id_prestamo = $1",

    UPDATE: "UPDATE Prestamos SET fecha_prestamo = $1, fecha_devolucion = $2, id_usuario = $3, \
    id_libro = $4, id_estado = $5 WHERE id_prestamo = $6 RETURNING id_prestamo",


}