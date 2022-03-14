import axios from "axios"
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