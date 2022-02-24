import Categoria from "../models/categoria"
import database from "./database"


const repositoryCategorias = {

    lerTodas: (callback: (categorias: Categoria[]) => void  ) => {

        const sql = 'SELECT * FROM categorias'

        const allcallback = (err: Error | null, rows: Categoria[]) => {
            callback(rows)
        }

        database.all(sql,allcallback) 
    },


    ler:(id: number, callback: (categoria: Categoria) => void) =>  {

        const sql = `SELECT * FROM categorias where id = ${id}`

        const callbackGet = (err: Error | null, categoria: Categoria) => {
            callback(categoria)
        }

        database.get(sql, callbackGet)

    }

}

export default repositoryCategorias
