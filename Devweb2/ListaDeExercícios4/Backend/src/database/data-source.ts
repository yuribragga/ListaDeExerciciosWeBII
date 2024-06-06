import "reflect-metadata"
import { DataSource } from "typeorm"
import Cliente from "../entity/cliente"
import Reservas from "../entity/reservas"
import Hotel from "../entity/hoteis"

export const Connection = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3307,
    username: "root",
    password: "fatec",
    database: "LISTX04",
    synchronize: true,
    logging: false,
    entities: [Cliente, Hotel, Reservas]
});