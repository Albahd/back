import { createBeer,retrieveBeers } from "./beer.model.js";

export const beerCtrl = async(req,res)=> {
    try{
        const beers = {
            ...req.body
        }
        await createBeer(beers)
        res.status(201).json(beers)
    
    }catch(err){
        console.error('error:', err)
    }
}



export const beerSCtrl  = async(req, res) => {
    // este controlador debe consultar las cervezas
    const beers = await retrieveBeers();
    res.json(beers);
};

