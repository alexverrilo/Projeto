import database from "./database";
import ParceiroCategoria from "../models/parceiroCategoria";


const repositoryParceiroCategoria = {
    lerTodas: (callback: (ParceiroCategoria: ParceiroCategoria[]) => void  ) => {

        const sql = 'SELECT * FROM ParceiroCategoria'

    const allcallback = (err: Error | null, rows: ParceiroCategoria[]) => {
        callback(rows)
    }

    database.all(sql,allcallback) 
},


ler:(id: number, callback: ( ParceiroCategoria: ParceiroCategoria) => void) =>  {

    const sql = `SELECT * FROM ParceiroCategoria where id = ${id}`

    const callbackGet = (err: Error | null, ParceiroCategoria: ParceiroCategoria) => {
        callback(ParceiroCategoria)
    }
    database.get(sql, callbackGet)
}}
export default repositoryParceiroCategoria