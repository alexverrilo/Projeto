
import axios from "axios"
import Categoria from "../models/categoria"

type lerCategoriasCallback = (categorias: Categoria[]) => void

const servicoCategoria = {
    lerTodos: (callback: lerCategoriasCallback) => {
        axios.get<Categoria[]>(' http://localhost:4000/categorias')
    }
        
   
}
export default servicoCategoria    