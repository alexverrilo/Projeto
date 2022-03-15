import axios from "axios"
import Parceiros from "../models/Parceiros"

    type lerParceirosCallback = (Parceiros: Parceiros[]) => void

   const servicoParceiros = {
        lerTodos: (callback: lerParceirosCallback) => {
            axios.get<Parceiros[]>(' http://localhost:4000/Parceiros')
            .then(res => callback(res.data))
          
        }
            
       
    }
    export default servicoParceiros