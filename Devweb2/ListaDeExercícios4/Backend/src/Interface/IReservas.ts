export interface ICreateReserva{
    res_horario: string
    cli_id: number
    hotel_id: number
}
export interface IUpadateReserva{
    res_date?: Date
    res_horario?: string
}