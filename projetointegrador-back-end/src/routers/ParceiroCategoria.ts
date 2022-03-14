import express from "express"
<<<<<<< HEAD
import ParceiroCategoria from "../models/parceiroCategoria"
=======
import ParceiroCategoria from "../models/ParceiroCategoria"
>>>>>>> 888704399d1e7c0bb5190facdb0f30c422a6cb04
import repositoryParceiroCategoria from "../repositories/ParceiroCategoria"


const routerParceiroCategoria = express.Router()
  routerParceiroCategoria.get('/ParceiroCategoria', (req, res) => {
    	const lerTodascallback = (ParceiroCategoria: ParceiroCategoria[]) => {
            res.json(ParceiroCategoria) 
        }
        repositoryParceiroCategoria.lerTodas (lerTodascallback)
    })

    routerParceiroCategoria.get('/ParceiroCategoria/:id', (req, res) => {
    const id: number = +req.params.id
    const callback = (ParceiroCategoria: ParceiroCategoria) => {
        res.json(ParceiroCategoria)
    }
        repositoryParceiroCategoria.ler (id, callback)
})
export default routerParceiroCategoria