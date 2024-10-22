export const SQL_GENERO ={

    GET_ALL: "SELECT id_genero, nombre_genero FROM Generos",

    ADD: "INSERT INTO Generos(nombre_genero) VALUES($1) RETURNING id_genero",

    HOW_MANY: "SELECT COUNT(*) AS existe FROM Generos WHERE id_genero = $1",


    HOW_MANY_NAME: "SELECT COUNT(*) AS existe FROM Generos WHERE nombre_genero = $1",

    DELETE: "DELETE FROM Generos WHERE id_genero = $1",
    
    UPDATE: "UPDATE Generos SET nombre_genero = $1 WHERE id_genero = $2 RETURNING id_estado"


}