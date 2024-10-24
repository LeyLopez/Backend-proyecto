export const SQL_RESERVA = {

    GET_ALL: "SELECT * FROM Reservas",

    ADD: "INSERT INTO Reservas(fecha_reserva, fecha_fin_reserva, id_usuario, id_libro, id_estado) \
    VALUES($1, $2, $3, $4, $5) RETURNING id_reserva",

    HOW_MANY: "SELECT COUNT(*) AS existe FROM Reservas WHERE id_reserva = $1",

    HOW_MANY_USER: "SELECT COUNT(*) AS existe FROM Reservas WHERE id_usuario = $1 AND id_libro = $2",

    DELETE: "DELETE FROM Reservas WHERE id_reserva = $1",

    UPDATE: "UPDATE Reservas SET fecha_reserva = $1, fecha_fin_reserva = $2, id_usuario = $3, \
    id_libro = $4, id_estado = $5 WHERE id_reserva = $6 RETURNING id_reserva",
    


}