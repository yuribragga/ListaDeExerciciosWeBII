import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import Reservas from "./reservas";

@Entity({name: 'hotel'})
export default class Hoteis{
    @PrimaryGeneratedColumn({type:'int'})
    hotel_id: number

    @Column({type: "varchar", length:100, nullable: false})
    hotel_nome: string

    @Column({type:"varchar", length:250, nullable: false})
    hotel_localizacao: string

    @OneToMany(()=> Reservas,reservas =>reservas.hotel)
    reservas: Reservas[]
}