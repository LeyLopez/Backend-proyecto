"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_ROL = void 0;
exports.SQL_ROL = {
    GET_ALL: "SELECT id_rol, nombre_rol, descripcion_rol FROM Roles",
    ADD: "INSERT INTO Roles(nombre_rol, descripcion_rol) VALUES($1, $2) RETURNING id_genero",
    HOW_MANY: "SELECT COUNT(*) AS existe FROM Roles WHERE id_rol = $1",
    HOW_MANY_NAME: "SELECT COUNT(*) AS existe FROM Roles WHERE nombre_rol = $1",
    DELETE: "DELETE FROM Roles WHERE id_rol = $1",
    UPDATE: "UPDATE Roles SET nombre_rol = $1, descripcion_rol = $2 WHERE id_rol = $3 RETURNING id_rol"
};
