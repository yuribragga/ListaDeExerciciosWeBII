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

