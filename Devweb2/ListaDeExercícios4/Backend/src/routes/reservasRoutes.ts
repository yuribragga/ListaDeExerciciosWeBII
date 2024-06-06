import { Router } from "express";
import ReservasController from "../controller/reservaController";

// instanciando router
const router = Router()
// instaciando reservas controller
const reservasController = new ReservasController()

router.post('/create/reserva', reservasController.createReservasController.bind(reservasController))
router.get('/read/reserva/:id', reservasController.readReservaController.bind(reservasController))
router.put('/update/reserva/:id', reservasController.updateReservaController.bind(reservasController))
router.delete('/delete/reserva/:id', reservasController.deleteReservaController.bind(reservasController))
router.get('/list/reservas', reservasController.listReservasController.bind(reservasController))

export default router