import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import Reservas from "./reservas";

@Entity({ name: 'cliente' })
export default class Cliente {
    @PrimaryGeneratedColumn({ type: 'int' })
    cli_id: number;

    @Column({ type: 'varchar', length: 100, nullable: false })
    cli_nome: string;

    @Column({ type: 'varchar', length: 100, nullable: false })
    cli_sobrenome: string;

    @Column({ type: 'varchar', length: 100, nullable: false, unique: true })
    cli_email: string;

    @OneToMany(() => Reservas, reservas => reservas.cliente, { onDelete: 'CASCADE' })
    reservas: Reservas[];
}
