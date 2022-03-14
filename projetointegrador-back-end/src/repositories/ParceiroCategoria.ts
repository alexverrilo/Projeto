import ParceiroCategoria from "../models/ParceiroCategoria";
import database from "./database";


const repositoryParceiroCategoria = {lerTodas: (callback: (ParceiroCategoria: ParceiroCategoria[]) => void  ) => {

        const sql = 'SELECT * FROM ParceiroCategoriacategorias'

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