import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import Cliente from "./cliente";
import Hoteis from "./hoteis";

@Entity({ name: 'reservas' })
export default class Reservas {
    @PrimaryGeneratedColumn({ type: 'int' })
    res_id: number;
    
    @Column({ type: 'time' })
    res_horario: string;

    @ManyToOne(() => Cliente, cliente => cliente.reservas, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn({ name: 'cli_id' })
    cliente: Cliente;

    @ManyToOne(() => Hoteis, hotel => hotel.reservas)
    @JoinColumn({ name: 'hotel_id' })
    hotel: Hoteis;
}
