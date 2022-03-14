<<<<<<< HEAD
=======
import ParceiroCategoria from "../models/ParceiroCategoria";
>>>>>>> 888704399d1e7c0bb5190facdb0f30c422a6cb04
import database from "./database";
import ParceiroCategoria from "../models/parceiroCategoria";


const repositoryParceiroCategoria = {
    lerTodas: (callback: (ParceiroCategoria: ParceiroCategoria[]) => void  ) => {

        const sql = 'SELECT * FROM ParceiroCategoriacategorias'

<<<<<<< HEAD
    const allcallback = (err: Error | null, rows: ParceiroCategoria[]) => {
        callback(rows)
    }

    database.all(sql,allcallback) 
},


ler:(id: number, callback: ( ParceiroCategoria: ParceiroCategoria) => void) =>  {
=======
        const allcallback = (err: Error | null, rows: ParceiroCategoria[]) => {
            callback(rows)
        }
        database.all(sql,allcallback) 
    },
 ler:(id: number, callback: ( ParceiroCategoria: ParceiroCategoria) => void) =>  {
>>>>>>> 888704399d1e7c0bb5190facdb0f30c422a6cb04

    const sql = `SELECT * FROM ParceiroCategoria where id = ${id}`

    const callbackGet = (err: Error | null, ParceiroCategoria: ParceiroCategoria) => {
        callback(ParceiroCategoria)
    }
    database.get(sql, callbackGet)
}}
export default repositoryParceiroCategoria