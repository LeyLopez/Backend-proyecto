export const SQL_GENEROLIBRO  = {

    GELL_ALL: "SELECT id_genero, id_libro FROM Generos_libros",

    ADD: "INSERT INTO Generos_libros(id_genero, id_libro) VALUES($1, $2) RETURNING id_genero",

    HOW_MANY: "SELECT COUNT(*) AS existe FROM Generos_libros WHERE id_genero = $1",

    HOW_MANY_NAME: "SELECT COUNT(*) AS existe FROM Generos_libros WHERE id_libro = $1",

    DELETE: "DELETE FROM Generos_libros WHERE id_genero = $1 AND id_libro = $2",

    UPDATE: "UPDATE Generos_libros SET id_genero = $1, id_libro = $2 WHERE id_genero = $1 AND id_libro = $2 RETURNING id_genero"
    

}