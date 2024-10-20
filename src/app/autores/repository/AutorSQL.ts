export const SQL_AUTORES = {

    GET_ALL: 
    "SELECT nombre_autor, apellido_atuor, fecha_nacimiento_autor  FROM Autores",

    ADD:
    "INSERT INTO Autores(nombre_autor, apellido_autor, fecha_nacimiento_autor) VALUES($1, $2, $3)",

    HOW_MANY:
    "SELECT COUNT(id_autor) FROM Autores WHERE id_autor = $1",

    DELETE:
    "DELETE FROM Autores WHERE id_autor = $1",

    UPDATE:
    "UPDATE Autores SET nombre_autor = $1, apellido_autor = $2, fecha_nacimiento_autor = $3 WHERE id_autor = $4",



};