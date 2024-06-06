export interface IReadCliente{
    cli_id: number
    cli_nome: string
    cli_sobrenome: string
    cli_email: string
    reservas?: string[] 
}

export interface ICreateClient{
    cli_nome: string
    cli_sobrenome: string
    cli_email: string
}

export interface IUpdateClient{
    cli_nome?: string
    cli_sobrenome?: string
    cli_email?: string
}

export interface ICreateReserva{
    // res_date: string
    res_horario: string
    cli_id: number 
    hotel_id: number 
}

export interface IReadReserva{
    res_id: number
    res_horario: string
    cli_id: number
    hotel_id: number
}
export interface IReadReserva2{
    hotel_id: number;
    cliente: string;
    hotel: string;
    localizacao: string;
    tipoCozinha: string;
    horario: string;
}
export interface IUpadateReserva{
    res_horario?: string
}

export interface IReadHotel{
    hotel_id: number
    hotel_nome: string
    hotel_localizacao: string
    reservas?: string[]
}