
import axios from "axios"
import Categoria from "../models/categoria"

type lerCategoriasCallback = (categorias: Categoria[]) => void

const servicoCategoria = {
    lerTodos: (callback: lerCategoriasCallback) => {
        axios.get<Categoria[]>(' http://localhost:4000/categorias')
        .then((res) => {
            callback(res.data)
        })
        .catch((error) => {
            console.log(error)
        })
      
    }
        
   
}
export default servicoCategoria    