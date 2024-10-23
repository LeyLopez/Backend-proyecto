export const SQL_USUARIO = {

    GET_ALL: "SELECT * FROM Usuarios",



    HOW_MANY:
    "SELECT COUNT(*) AS existe FROM Usuarios WHERE id_usuario = $1",



    HOW_MANY_EMAIL:
    "SELECT COUNT(*) AS existe FROM Usuarios WHERE email_usuario = $1",



    ADD: "INSERT INTO Usuarios(nombre_usuario, apellido_usuario, email_usuario, clave_usuario, \
    tipo_documento_usuario, numero_documento_usuario, fecha_nacimiento_usuario, telefono_usuario, \
    direccion_usuario, id_rol) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING id_usuario",



    DELETE: "DELETE FROM Usuarios WHERE id_usuario = $1",



    UPDATE: "UPDATE Usuarios SET nombre_usuario = $1, apellido_usuario = $2, email_usuario = $3, \
    clave_usuario = $4, tipo_documento_usuario = $5, numero_documento_usuario = $6, \
    fecha_nacimiento_usuario = $7, telefono_usuario = $8, direccion_usuario = $9, id_rol = $10 WHERE id_usuario = $11 \
    RETURNING id_usuario",


}
