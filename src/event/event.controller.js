import { createEvent,retrieveEvent } from "./event.model.js";

export const EventCtrl = async(req,res)=> { //para el post
    try{
        const events = {
            ...req.body
        }
        await createEvent(events)
        res.status(201).json(events)
    
    }catch(err){
        console.error('error:', err)
    }
}



export const EventSCtrl  = async(req, res) => { // para el get
    
    const events = await retrieveEvent();
    res.json(events);
};
