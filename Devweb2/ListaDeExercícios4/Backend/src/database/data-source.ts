import "reflect-metadata"
import { DataSource } from "typeorm"
import Cliente from "../entity/cliente"
import Reservas from "../entity/reservas"
import Hotel from "../entity/hoteis"

export const Connection = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "fatec",
    database: "lista4",
    synchronize: true,
    logging: false,
    entities: [Cliente, Hotel, Reservas]
});