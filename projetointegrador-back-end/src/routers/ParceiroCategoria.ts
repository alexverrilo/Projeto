import express from "express"
import ParceiroCategoria from "../models/ParceiroCategoria"
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