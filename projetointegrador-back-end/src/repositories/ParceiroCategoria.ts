import ParceiroCategoria from "../models/parceiro-categoria";
import database from "./database";


const repositoryParceiroCategoria = {lerTodas: (callback: (ParceiroCategoria: ParceiroCategoria[]) => void  ) => {

    const sql = 'SELECT * FROM ParceiroCategoria'

    const allcallback = (err: Error | null, rows: ParceiroCategoria[]) => {
        console.log('repositoryParceiroCategoria.lerTodas:')
        rows.forEach(ParceiroCategoria => {
            console.log(ParceiroCategoria)
        });

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