import {  ICreateReserva, IUpadateReserva} from "../Interface/interface";
import api from "../services/api";

export async function listaReservas() {
    try {
        const results = await api.get(`/list/reservas`);
        if (!results) {
            console.error(`Erro ao encontrar resultados`);
        }
        return results;
    } catch (error) {
        console.error(`Erro ao listar os clientes: ${error}`);
    }
}

export async function reservaEspecifica(id: string) {
    try {
        const results = await api.get(`/read/reserva/${id}`);
        console.log(id)
        if (!results) {
            console.error(`Nenhum resultado encontrado`);
        }
        return results;
    } catch (error) {
        console.error(`Erro ao buscar cliente específico: ${error}`);
    }
}

export async function cadastrarReserva(dadosCadastro: ICreateReserva) {
    try {
        const results = await api.post(`/create/reserva`, dadosCadastro);
        if (!results) {
            console.error(`Nenhum resultado encontrado`);
        }
        return results;
    } catch (error) {
        console.error(`Erro ao cadastrar cliente: ${error}`);
    }
}

export async function excluiReserva(id: string) {
    try {
        const results = await api.delete(`/delete/reserva/${id}`);
        console.log(results)
        if (!results) {
            console.error(`Nenhum resultado encontrado`);
        }
        return results;
    } catch (error) {
        console.error(`Erro ao excluir cliente: ${error}`);
    }
}

export async function editaReserva(id: string, dadosUpdate: IUpadateReserva) {
    try {
        const results = await api.put(`/update/reserva/${id}`, dadosUpdate);
        if (!results) {
            console.error(`Nenhum resultado encontrado`);
        }
        return results;
    } catch (error) {
        console.error(`Erro ao atualizar cliente: ${error}`);
    }
}
