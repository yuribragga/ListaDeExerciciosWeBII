import { Request, Response } from "express";
import ClienteService from "../service/clienteService";

class ClienteController{
    private clienteService: ClienteService

    constructor (){
        this.clienteService = new ClienteService()
    }

    public async createClientController(req: Request, res: Response){
        try{
            // pega as informações do corpo
            const formData = req.body
            console.log(formData)
            // envia para o service
            const resultado = await this.clienteService.createClient(formData)
            // verifica
            if(!resultado.success){
                return res.status(400).json({ message: resultado.message })
            } 
            return res.status(201).json(resultado)
        }catch(error){
            console.error(`Erro em criar novo cliente: ${error}`)
            return res.status(500).json({ messagem: 'Erro interno do servidor' })
        }
    }

    public async readClientController(req: Request, res: Response){
        try{
            // pega o id dos parametros
            const id = req.params.id
            // passa para o service
            const resultado = await this.clienteService.readClient(parseInt(id))
            // verifica se é sucesso
            if(!resultado.success){
                return res.status(400).json({ message: resultado.message })
            } 
            return res.status(200).json(resultado)
        }catch(error){
            console.error(`Erro em ver cliente: ${error}`)
            return res.status(500).json({ messagem: 'Erro interno do servidor' })
        }
    }

    public async updateClientController(req: Request, res: Response){
        try{
            // pega o id dos parametros
            const id = req.params.id
            // pega as informações do corpo
            const formData = req.body
            // passa para o service
            const resultado = await this.clienteService.updateClient(parseInt(id),formData)
            // verifica se é sucesso
            if(!resultado.success){
                return res.status(400).json({ message: resultado.message })
            } 
            return res.status(200).json(resultado)
        }catch(error){
            console.error(`Erro em editar cliente: ${error}`)
            return res.status(500).json({ messagem: 'Erro interno do servidor' })
        }
    }

    public async deleteClientController(req: Request, res: Response){
        try{
            // pega o id dos parametros
            const id = req.params.id
            // passa para o service
            const resultado = await this.clienteService.deleteClient(parseInt(id))
            // verifica se é sucesso
            if(!resultado.success){
                return res.status(400).json({ message: resultado.message })
            } 
            return res.status(200).json(resultado)
        }catch(error){
            console.error(`Erro em deletar cliente: ${error}`)
            return res.status(500).json({ messagem: 'Erro interno do servidor' })
        }
    }

    public async listClientController(req: Request, res: Response){
        try{
            const resultado = await this.clienteService.listClient()
            // verifica se é sucesso
            if(!resultado.success){
                return res.status(400).json({ message: resultado.message })
            } 
            return res.status(200).json(resultado)
        }catch(error){
            console.error(`Erro em listar clientes: ${error}`)
            return res.status(500).json({ messagem: 'Erro interno do servidor' })
        }
    }
}

export default ClienteController