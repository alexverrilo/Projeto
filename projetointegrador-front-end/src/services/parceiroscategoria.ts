import axios from "axios"
import ParceiroCategoria from "../models/ParceiroCategoria"


    type lerParceiroCategoriaCallback = (ParceiroCategoria: ParceiroCategoria[]) => void

    const servicoParceiroCategoria = {
         lerTodos: (callback: lerParceiroCategoriaCallback) => {
             axios.get<ParceiroCategoria[]>(' http://localhost:4000/ParceiroCategoria') 
         }
        }
export default ParceiroCategoria



