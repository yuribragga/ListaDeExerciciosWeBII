import 'reflect-metadata' //permirte trabalhar com a ideia de anotexoes
import express from'express'
import cors from 'cors'
import { Connection } from './database/data-source'
import ReservaRouter from './routes/reservasRoutes'
import HotelRouter from './routes/hoteisRoutes'
import ClienteRouter from './routes/clienteRoutes'
import { ICreateHotel } from './Interface/IHotel'
import HotelService from './service/hoteisService'

//Inicializa
const app = express() 

//Incializa o cors para não dar bloqueio nas requesições
app.use(cors())
//Colocamos que vamos usar o padrão de dados em tipo json
app.use(express.json())
//Define as rotas que vão ser usadas
app.use(ReservaRouter)
app.use(HotelRouter)
app.use(ClienteRouter)

//Função para inicializar o banco de dados e o projeto
async function inicializaProjeto() {
    try {
        // Inicializa a conexão com o banco de dados
        await Connection.initialize()
        console.log('Banco de dados conectado com sucesso!')

        adicionarHoteis()
        // Inicializa o projeto depois que conecta com o banco 
        const porta = 5000
        app.listen(porta, ()=>{
            console.log(`Servidor rodando na porta ${porta}`)
        })
    }catch(error){
        console.error(`Erro o inicializar banco : ${error}`)
    }
}

// Chama a função 
inicializaProjeto()

async function adicionarHoteis() {
    const hotelService = new HotelService();

    const hotel: ICreateHotel[] = [
    { hotel_nome: "Hotel Sol Nascente", hotel_localizacao: "Rua das Flores, 123, São Paulo, SP" },
    { hotel_nome: "Hotel Mar Azul", hotel_localizacao: "Avenida Itália, 456, Rio de Janeiro, RJ" },
    { hotel_nome: "Hotel Sakura", hotel_localizacao: "Praça Japão, 789, Curitiba, PR"},
    { hotel_nome: "Hotel Estância Gaúcha", hotel_localizacao: "Rodovia dos Bandeirantes, km 25, Campinas, SP" },
    { hotel_nome: "Hotel Pão de Queijo", hotel_localizacao: "Rua dos Pães, 101, Porto Alegre, RS"},
    { hotel_nome: "Hotel Minas Gerais", hotel_localizacao: "Travessa dos Vinhos, 202, Belo Horizonte, MG"},
    { hotel_nome: "Hotel Bahia", hotel_localizacao: "Avenida América, 303, Salvador, BA"},
    { hotel_nome: "Hotel Planalto Central", hotel_localizacao: "Rua da Índia, 404, Brasília, DF"},
    { hotel_nome: "Hotel Ilha da Magia", hotel_localizacao: "Avenida Central, 505, Florianópolis, SC"},
    { hotel_nome: "Hotel Sol Nordestino", hotel_localizacao: "Rua dos Burgers, 606, Fortaleza, CE"},
    { hotel_nome: "Hotel Floresta Amazônica", hotel_localizacao: "Avenida das Rosas, 707, Manaus, AM"  },
    { hotel_nome: "Hotel Bollywood", hotel_localizacao: "Rua da Índia, 101, Mumbai, MH"  },

    ];

    for (const hoteis of hotel) {
        const result = await hotelService.createHotel(hoteis);
        console.log(result.message);
    }
}


