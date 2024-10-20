"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_AUTORES = void 0;
exports.SQL_AUTORES = {
    GET_ALL: "SELECT id_autor, nombre_autor, apellido_autor, fecha_nacimiento_autor  FROM Autores",
    ADD: "INSERT INTO Autores(nombre_autor, apellido_autor, fecha_nacimiento_autor) VALUES($1, $2, $3)  RETURNING id_autor",
    HOW_MANY: "SELECT COUNT(*) AS existe FROM Autores WHERE id_autor = $1",
    HOW_MANY_NAME_LASTNAME: "SELECT COUNT(*) AS existe FROM Autores WHERE nombre_autor = $1 AND apellido_autor = $2",
    DELETE: "DELETE FROM Autores WHERE id_autor = $1",
    UPDATE: "UPDATE Autores SET nombre_autor = $1, apellido_autor = $2, fecha_nacimiento_autor = $3 WHERE id_autor = $4 RETURNING id_autor",
};
