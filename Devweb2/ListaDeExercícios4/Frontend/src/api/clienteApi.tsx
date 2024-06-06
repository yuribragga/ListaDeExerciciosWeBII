import { ICreateClient, IUpdateClient } from "../Interface/interface";
import api from "../services/api";

export async function listaClientes() {
    try {
        const results = await api.get(`/list/client`);
        if (!results) {
            console.error(`Erro ao encontrar resultados`);
        }
        return results;
    } catch (error) {
        console.error(`Erro ao listar os clientes: ${error}`);
    }
}

export async function clienteEspecifico(id: string) {
    try {
        const results = await api.get(`/read/client/${id}`);
        if (!results) {
            console.error(`Nenhum resultado encontrado`);
        }
        return results;
    } catch (error) {
        console.error(`Erro ao buscar cliente específico: ${error}`);
    }
}

export async function cadastrarCliente(dadosCadastro: ICreateClient) {
    try {
        const results = await api.post(`/create/client`, dadosCadastro);
        if (!results) {
            console.error(`Nenhum resultado encontrado`);
        }
        return results;
    } catch (error) {
        console.error(`Erro ao cadastrar cliente: ${error}`);
    }
}

export async function excluirCliente(id: string) {
    try {
        const results = await api.delete(`/delete/client/${id}`);
        if (!results) {
            console.error(`Nenhum resultado encontrado`);
        }
        return results;
    } catch (error) {
        console.error(`Erro ao excluir cliente: ${error}`);
    }
}

export async function editaCliente(id: string, dadosUpdate: IUpdateClient) {
    try {
        const results = await api.put(`/update/client/${id}`, dadosUpdate);
        if (!results) {
            console.error(`Nenhum resultado encontrado`);
        }
        return results;
    } catch (error) {
        console.error(`Erro ao atualizar cliente: ${error}`);
    }
}
