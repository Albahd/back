import express from "express";
import {FavCtrl, FavSCtrl,DeleteUserfav,validateEmailCtrl } from "./fav.controller.js";
import { validateAuth } from"../auth/auth.middleware.js"


const Favrouter = express.Router();

// Favrouter.route('/') // definimos las rutas en el router sin poner el contexto del recurso. Eso se hace en el app
//     .post(FavCtrl)
//     .get(FavSCtrl)
    
//     Favrouter.route('/:id')
//     .delete(DeleteUserfav)
  
//     export default Favrouter;



    Favrouter.route('/') // definimos las rutas en el router sin poner el contexto del recurso. Eso se hace en el app
    .post(validateAuth,FavCtrl)
    .get(validateAuth,FavSCtrl)
    
    Favrouter.route('/:id')
    .delete(DeleteUserfav)
  
    export default Favrouter;