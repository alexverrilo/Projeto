import axios from "axios"
<<<<<<< HEAD
import ParceiroCategoria from "../models/parceiro-categoria"

type lerParceiroCategoriaCallback = (ParceiroCategoria: ParceiroCategoria[]) => void

const servicoParceiroCategoria = {
     lerTodos: (callback: lerParceiroCategoriaCallback) => {
         axios.get<ParceiroCategoria[]>(' http://localhost:4000/ParceiroCategoria')
         .then((res) => {
             callback(res.data)
         })
         .catch((error) => {
             console.log(error)
         })
       
     }
         
    
 }
 export default servicoParceiroCategoria
=======
import ParceiroCategoria from "../models/ParceiroCategoria"


    type lerParceiroCategoriaCallback = (ParceiroCategoria: ParceiroCategoria[]) => void

    const servicoParceiroCategoria = {
         lerTodos: (callback: lerParceiroCategoriaCallback) => {
             axios.get<ParceiroCategoria[]>(' http://localhost:4000/ParceiroCategoria') 
         }
        }
export default ParceiroCategoria



>>>>>>> 888704399d1e7c0bb5190facdb0f30c422a6cb04
