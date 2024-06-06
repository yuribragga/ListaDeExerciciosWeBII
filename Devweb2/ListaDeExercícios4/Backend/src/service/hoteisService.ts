import { Connection } from "../database/data-source";
import Hoteis from "../entity/hoteis";
import Hotel from "../entity/hoteis";
import { ICreateHotel } from "../Interface/IHotel";

class HotelService{
    private hotelRepository = Connection.getRepository(Hoteis)

    public async createHotel(formData: ICreateHotel) {
        try {
            // Busca restaurante existente 
            const hotel = await this.hotelRepository.findOne({
                where: { 
                    hotel_nome: formData.hotel_nome, 
                    hotel_localizacao: formData.hotel_localizacao, 
                }
            });

            // Verifica se foi encontrado
            if (hotel) {
                return { success: false, message: `Hotel já cadastrado!` };
            }

            // Cria o novo restaurante
            const novoHotel = this.hotelRepository.create(formData);

            // Salva o novo restaurante
            await this.hotelRepository.save(novoHotel);

            return { success: true, message: `Cadastro realizado com sucesso!` };
        } catch (error) {
            console.error(`Erro ao cadastrar Hotel: ${error}`);
            return { success: false, message: `Erro ao cadastrar Hotel` };
        }
    }

    public async listarHotel(){
        try{
            const hoteis = await this.hotelRepository.find()
            if(!hoteis || hoteis.length === 0){
                return { success: false, message: `Nenhum Hotel cadastrado!`}
            }
            return { success: true, message: `Hotéis encontrados`, hoteis}
        }catch(error){
            console.error(`Erro em listar todos os restaurantes: ${error}`)
        }
    }
}

export default HotelService