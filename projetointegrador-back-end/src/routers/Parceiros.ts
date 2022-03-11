import express from "express"
import repositoryParceiros from "../repositories/Parceiros"
import  Parceiros from "../models/parceiros"


const routerParceiros = express.Router()

	    routerParceiros.get('/Parceiros', (req, res) => {
    	const lerTodascallback = (Parceiros: Parceiros[]) => {
            res.json(Parceiros) 
        }
        repositoryParceiros.lerTodas (lerTodascallback)
    })
    routerParceiros.get('/Parceiros/:id', (req, res) => {

        const id: number = +req.params.id
        const callback = (Parceiros: Parceiros) => {
            res.json(Parceiros)
        }
            repositoryParceiros.ler(id, callback)
    })
    
    export default routerParceiros
