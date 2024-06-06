import { Request, Response } from "express";
import HotelService from "../service/hoteisService";

class HoteisController{
    private hotelService: HotelService

    constructor(){
        this.hotelService = new HotelService()
    }

    public async listarHotel(req: Request, res: Response){
        try{
            const resultado = await this.hotelService.listarHotel()
            // verifica
            if(!resultado.success){
                return res.status(400).json({ message: resultado.message })
            } 
            return res.status(201).json(resultado)
        }catch(error){
            console.error(`Erro ao listar Hotéis: ${error}`)
            return res.status(500).json({ message: `Erro interno do servidor` })
        }
    }
}
export default HoteisController