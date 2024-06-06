import { Router } from "express";
import HoteisController from "../controller/hoteisController";

//criando uma instacia do router
const router = Router()
// criando uma instacia do restaurante controller
const hoteisController = new HoteisController()

router.get('/list/hoteis', hoteisController.listarHotel.bind(hoteisController))

export default router
