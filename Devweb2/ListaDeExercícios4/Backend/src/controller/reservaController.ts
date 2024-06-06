import { Request, Response } from "express";
import ReservasService from "../service/reservasService";
import { ICreateReserva } from "../Interface/IReservas";
import { parentPort } from "worker_threads";

class ReservasController{
    private reservasServices: ReservasService

    constructor(){
        this.reservasServices = new ReservasService()
    }

    public async createReservasController(req: Request, res: Response){
        try{
            // pega os dados do corpo 
            const dados= req.body

            const formData = {
            res_horario: dados.res_horario,
            cli_id:  parseInt(dados.cli_id),
            hotel_id: parseInt(dados.hotel_id)
            };
            // passa para o service
            const resultado = await this.reservasServices.createReserva(formData)
            // verifica 
            if(!resultado.success){
                return res.status(400).json({ message: resultado.message })
            }
            return res.status(201).json(resultado)
        }catch(error){
            console.error(`Erro ao criar uma reserva: ${error}`)
            return res.status(500).json({ message: `Erro interno do servidor!` })
        }
    }

    public async readReservaController(req: Request, res: Response){
        try{
            //pega o id dos params
            const id = req.params.id
            // passa para o service
            const resultado = await this.reservasServices.readReserva(parseInt(id))
            // verifica 
            if(!resultado.success){
                return res.status(400).json({ message: resultado.message })
            }
            return res.status(200).json(resultado)
        }catch(error){
            console.error(`Erro ao ver uma reserva: ${error}`)
            return res.status(500).json({ message: `Erro interno do servidor!` })
        }
    }

    public async updateReservaController(req: Request, res: Response){
        try{
            //pega o id dos params
            const id = req.params.id
            // pega os dados do corpo 
            const formData = req.body
            // passa para o service
            const resultado = await this.reservasServices.updateReserva(parseInt(id), formData)
            // verifica 
            if(!resultado.success){
                return res.status(400).json({ message: resultado.message })
            }
            return res.status(200).json(resultado)
        }catch(error){
            console.error(`Erro ao editar uma reserva: ${error}`)
            return res.status(500).json({ message: `Erro interno do servidor!` })
        }
    }

    public async deleteReservaController(req: Request, res: Response){
        try{
            //pega o id dos params
            const id = req.params.id
            // passa para o service
            const resultado = await this.reservasServices.deleteReserva(parseInt(id))
            // verifica 
            console.log(resultado)
            if(!resultado.success){
                return res.status(400).json({ message: resultado.message })
            }
            return res.status(200).json(resultado)
        }catch(error){
            console.error(`Erro ao deletar uma reserva: ${error}`)
            return res.status(500).json({ message: `Erro interno do servidor!` })
        }
    }

    public async listReservasController(req: Request, res: Response){
        try{
            // chama o metodo do service
            const resultado = await this.reservasServices.listReservas()
            // verifica 
            if(!resultado.success){
                return res.status(400).json({ message: resultado.message })
            }
            return res.status(200).json(resultado)
        }catch(error){
            console.error(`Erro ao listar reservas: ${error}`)
            return res.status(500).json({ message: `Erro interno do servidor!` })
        }
    }
}

export default ReservasController