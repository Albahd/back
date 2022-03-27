import express from "express";
import { EventCtrl, EventSCtrl } from "./event.controller.js";


const Evrouter = express.Router();

Evrouter.route('/') // definimos las rutas en el router sin poner el contexto del recurso. Eso se hace en el app
    .post(EventCtrl)
    .get(EventSCtrl)
  
    export default Evrouter;