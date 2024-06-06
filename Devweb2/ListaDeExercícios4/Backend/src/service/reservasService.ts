import { Console } from "console";
import { Connection } from "../database/data-source";
import Reservas from "../entity/reservas";
import { ICreateReserva, IUpadateReserva } from "../Interface/IReservas";
import Cliente from "../entity/cliente";
import Hotel from "../entity/hoteis";

class ReservasService {
    private reservasRepository = Connection.getRepository(Reservas)
    private clienteRepository = Connection.getRepository(Cliente)
    private hotelRepository = Connection.getRepository(Hotel)

    public async createReserva(FormData: ICreateReserva){
        try{
            // busca cliente 
            const cliente = await this.clienteRepository.findOne({ 
                where: { cli_id: FormData.cli_id}
            })
            // verifica se o cliente existe
            if(!cliente){
                return { success: false, message: `Cliente não encontrado!`}
            }
            const clienteRecuperado = cliente
            
            //busca restaurante
            const restaurante = await this.hotelRepository.findOne({
                where: { hotel_id: FormData.hotel_id }
            })
            //verifica se o restaurante existe
            if(!restaurante){
                return { success: false, message: `Restaurante não encontrado!`}
            }
            
            const hotelRecuperado = restaurante
            // cria a reserva
            const novaReserva = await this.reservasRepository.create({
                res_horario: FormData.res_horario,
                hotel: hotelRecuperado,
                cliente: clienteRecuperado
            })
            // salva a reserva
            await this.reservasRepository.save(novaReserva)
            
            return { success: true, message:`Reserva criada!`}
        }catch(error){  
            console.error(`Erro ao criar reserva: ${error}`)
        }
    }

    public async readReserva(id: number){
        try{
            // busca reserva 
            const reserva = await this.reservasRepository.findOne({
                where: { res_id: id},
                relations: ['cliente', 'hotel'] 
            })
            // verifica se a reserva existe
            if(!reserva){
                return { success: false, message: `Reserva não encontrada!` }
            }

            //Obtém os dados do cliente associado a reserva
            const cliente : Cliente = reserva.cliente

            // Obtém os dados do restaurante associado a reserva
            const hotel : Hotel = reserva.hotel

            const reservaDetalhes = {
                res_id: reserva.res_id,
                cliente : cliente.cli_nome,
                hotel: hotel.hotel_nome,
                localizacao : hotel.hotel_localizacao,
                horario: reserva.res_horario
            }
            console.log(reservaDetalhes)
            return { success: true, message: `Reserva encontrada!`, data: reservaDetalhes}
        }catch(error){
            console.error(`Erro em visualizar a reserva: ${error}`)
        }
    }

    public async updateReserva(id: number, FormData:IUpadateReserva){
        try{
            // busca reserva
            const reserva = await this.reservasRepository.findOne({
                where: { res_id: id}
            })
            // verifica se ela existe
            if(!reserva){
                return { success: false, message: `Reserva não encontrada`}
            }
            // mescla com as informções que nao foram enviadas
            const dadosUpdate = { ...reserva, ...FormData}
            // faz update
            await this.reservasRepository.update(id, dadosUpdate)
            return { success: true, message: `Reserva atualizada!`}
        }catch(error){
            console.error(`Erro em editar reserva: ${error}`)
        }
    }

    public async deleteReserva(id: number){
        try{
            // busca reserva
            const reserva = await this.reservasRepository.findOne({
                where: { res_id: id}
            })
            // verifica se ela existe
            if(!reserva){
                return { success: false, message: `Reserva não encontrada`}
            }
            // deleta a reserva
            await this.reservasRepository.delete(reserva)

            return { success: true, message: `Reserva deletada!`}
        }catch(error){
            console.error(`Erro em deletar reserva: ${error}`)
        }
    }

    public async listReservas(){
        try{
            // buscas todas as reservas
            const reservas = await this.reservasRepository.find()
            //verifica se existe
            if(!reservas || reservas.length === 0){
                return { success: false, message: `Nenhuma encontrada!`}
            }

            return { success: true, message: `Reservas encontradas!`, reservas}
        }catch(error){
            console.error(`Erro em listar as reservas: ${error}`)
        }
    }
}

export default ReservasService