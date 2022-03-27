import express from "express";
import { beerCtrl, beerSCtrl } from "./beer.controller.js";


const router = express.Router();

router.route('/beer') // definimos las rutas en el router sin poner el contexto del recurso. Eso se hace en el app
    .post(beerCtrl)
    .get(beerSCtrl)
  
    export default router;
