import { Connection } from "../database/data-source";
import Cliente from "../entity/cliente";
import { ICreateClient, IUpdateClient } from "../Interface/ICliente";

class ClienteService{
    private clienteRepository = Connection.getRepository(Cliente)

    public async createClient(formData: ICreateClient){
        try{
            // busca se o cliente já existe com base no email que foi passado
            const cliente = await this.clienteRepository.findOne({ 
                where: { cli_email: formData.cli_email}
            })
            console.log(cliente)
            // verifica se o cliente existe
            if (cliente){
                return { success: false, message: `Cliente já cadastrado!` }
            }
            //Cria um novo usuario
            const novoCliente = await this.clienteRepository.create(formData)
            // salva o novo cliente
            this.clienteRepository.save(novoCliente)
            console.log(novoCliente)
            return { success: true, message: `Cliente Cadastrado com sucesso!`}
        }catch(error){
            console.error(`Erro ao cadastrar novo cliente: ${error}`)
        }
    }

    public async readClient(id: number){
        try{
            const cliente = await this.clienteRepository.findOne({
                where: { cli_id: id}
            })
            // verifica se o cliente exite
            if(!cliente){
                return { success: false, message: `Cliente não encontrado!`}
            }
            return { success: true, message: `Cliente encontrado!`, cliente}
        }catch(error){
            console.error(`Erro ao visualizar cliente: ${error}`)
        }
    }

    public async updateClient(id: number, formData: IUpdateClient){
        try{
            // Busca o cliente pelo id passado
            const cliente = await this.clienteRepository.findOne({
                where: { cli_id: id}
            })
            // Verifica se o cliente foi encontrado
            if (!cliente){
                return { success: false, message: `Cliente não encontrado!`}
            }

            // Faz a mescla, alteirando somento o que foi enviado e deixadno o que nao mudou
            const dadosUpdate = { ...cliente, ...formData}
            // faz o update
            await this.clienteRepository.update(id, dadosUpdate)
            console.log(dadosUpdate)
            return { success: true, message: `Atualização realizado com sucesso!`}
        }catch(error){
            console.error(`Erro ao editar cliente: ${error}`)
        }
    }

    public async deleteClient(id: number){
        try{
             // Busca o cliente pelo id passado
             const cliente = await this.clienteRepository.findOne({
                where: { cli_id: id}
            })
            // Verifica se o cliente foi encontrado
            if (!cliente){
                return { success: false, message: `Cliente não encontrado!`}
            }
            // Deleta o cliente
            console.log(cliente)
            this.clienteRepository.delete(cliente)
            console.log(cliente)
            return { success: true, message: `Cliente deletado com sucesso!`}
        }catch(error){
            console.error(`Erro ao deletar cliente: ${error}`)
        }
    }

    public async listClient(){
        try{
            // Busca todos os clientes 
            const clientes = await this.clienteRepository.find()
            // verifica se foi encontrado cliente
            if(!clientes || clientes.length === 0){
                return { success: false, message: `Não foi encontrado nenhum cliente!`}
            }
            return { success: true, message: `Clientes encontrados!`, clientes }
        }catch(error){
            console.error(`Erro ao listar todos os clientes: ${error}`)
        }
    }

}

export default ClienteService