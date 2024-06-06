import api from "../services/api";

export async function listaHoteis() {
    try {
        const results = await api.get(`/list/hoteis`);
        if (!results) {
            console.error(`Erro ao encontrar resultados`);
        }
        return results;
    } catch (error) {
        console.error(`Erro ao listar os clientes: ${error}`);
    }
}