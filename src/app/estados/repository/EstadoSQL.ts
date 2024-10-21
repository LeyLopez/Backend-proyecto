export const SQL_ESTADO ={

    GET_ALL: "SELECT id_estado, nombre_estado, descripcion_estado FROM Estados",

    ADD: "INSERT INTO Estados(nombre_estado, descripcion_estado) VALUES($1, $2) RETURNING id_estado",

    HOW_MANY: "SELECT COUNT(*) AS existe FROM Estados WHERE id_estado = $1",


    HOW_MANY_NAME: "SELECT COUNT(*) AS existe FROM Estados WHERE nombre_estado = $1",

    DELETE: "DELETE FROM Estados WHERE id_estado = $1",
    
    UPDATE: "UPDATE Estados SET nombre_estado = $1, descripcion_estado = $2 WHERE id_estado = $3 RETURNING id_estado"


}