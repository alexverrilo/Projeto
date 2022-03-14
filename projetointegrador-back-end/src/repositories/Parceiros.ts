import database from "./database"
import Parceiros from "../models/parceiros"



const repositoryParceiros = {

    lerTodas: (callback: (Parceiros: Parceiros[]) => void  ) => {

        const sql = 'SELECT * FROM Parceiros'

        const allcallback = (err: Error | null, rows: Parceiros[]) => {
            console.log('repositoryParceiros.lerTodas:')
            rows.forEach(parceiro => {
                console.log(parceiro)
            });

            callback(rows)
        }
        database.all(sql,allcallback) 
    },


    ler:(id: number, callback: ( Parceiros: Parceiros) => void) =>  {

        const sql = `SELECT * FROM Parceiros where id = ${id}`

        const callbackGet = (err: Error | null,  Parceiros: Parceiros) => {
            callback(Parceiros)
        }

        database.get(sql, callbackGet)

    }

}

export default repositoryParceiros
