import { Router } from "express";
import ClienteController from "../controller/clienteController";

//cria uma instadcia do router
const router = Router()
//cria uma instancia do cliente controller
const clienteController = new ClienteController()

router.post('/create/client',clienteController.createClientController.bind(clienteController))
router.get('/read/client/:id', clienteController.readClientController.bind(clienteController))
router.put('/update/client/:id', clienteController.updateClientController.bind(clienteController))
router.delete('/delete/client/:id', clienteController.deleteClientController.bind(clienteController))
router.get('/list/client', clienteController.listClientController.bind(clienteController))

export default router