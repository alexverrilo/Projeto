import axios from "axios"
import Parceiros from "../models/parceiro"

    type lerParceirosCallback = (Parceiros: Parceiros[]) => void

   const servicoParceiros = {
        lerTodos: (callback: lerParceirosCallback) => {
            axios.get<Parceiros[]>(' http://localhost:4000/Parceiros')
            .then((res) => {
                callback(res.data)
            })
            .catch((error) => {
                console.log(error)
            })
          
        }
            
       
    }
    export default servicoParceiros