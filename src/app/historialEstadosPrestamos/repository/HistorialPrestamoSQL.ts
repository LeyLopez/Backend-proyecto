export const SQL_HISTORIAL_ESTADO_PRESTAMO ={

    GET_ALL: "SELECT * FROM Historial_estados_prestamos",

    ADD: "INSERT INTO Historial_estados_prestamos (fecha_cambio_estado, id_prestamo, id_estado) VALUES ($1, $2, $3) \
    RETURNING id_historial_estado_prestamo",

    HOW_MANY: "SELECT COUNT(*) FROM Historial_estados_prestamos",

    HOW_MANY_PRESTAMO_ESTADO: "SELECT COUNT(*) FROM Historial_estados_prestamos WHERE id_prestamo = $1 AND id_estado = $2",

    DELETE: "DELETE FROM Historial_estados_prestamos WHERE id_historial_estado_prestamo = $1",

    UPDATE: "UPDATE Historial_estados_prestamos SET fecha_cambio_estado = $1, id_prestamo = $2, id_estado = $3 \
    WHERE id_historial_estado_prestamo = $4 RETURNING id_historial_estado_prestamo",

    
}