import express from "express"
import { chownSync } from "fs"
import Categoria from "../models/categoria"
import repositoryCategorias from "../repositories/categorias"



const routerCategorias = express.Router()

	    routerCategorias.get('/categorias', (req, res) => {
    	const lerTodascallback = (categorias: Categoria[]) => {
            res.json(categorias) 
        }
        repositoryCategorias.lerTodas (lerTodascallback)
    })



routerCategorias.get('/categorias/:id', (req, res) => {

    const id: number = +req.params.id
    const callback = (categoria: Categoria) => {
        res.json(categoria)
    }
        repositoryCategorias.ler(id, callback)
})

export default routerCategorias