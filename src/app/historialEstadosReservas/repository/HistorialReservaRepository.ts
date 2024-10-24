export const SQL_HISTORIAL_ESTADO_RESERVA = {

    GET_ALL: "SELECT * FROM Historial_estados_reserva",

    ADD: "INSERT INTO Historial_estados_reserva (fecha_cambio_estado, id_reserva, id_estado) VALUES ($1, $2, $3) \
    RETURNING id_historial_estado_reserva",

    HOW_MANY: "SELECT COUNT(*) FROM Historial_estados_reserva",

    HOW_MANY_RESERVA_ESTADO: "SELECT COUNT(*) FROM Historial_estados_reserva WHERE id_reserva = $1 AND id_estado = $2",

    DELETE: "DELETE FROM Historial_estados_reserva WHERE id_historial_estado_reserva = $1",

    UPDATE: "UPDATE Historial_estados_reserva SET fecha_cambio_estado = $1, id_reserva = $2, id_estado = $3 \
    WHERE id_historial_estado_reserva = $4 RETURNING id_historial_estado_reserva",
}