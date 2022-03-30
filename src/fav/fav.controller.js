import { createFav,retrieveFav,deleteFav } from "./fav.model.js";

export const FavCtrl = async(req,res)=> { //para el post
    try{
        const favs = {
            ...req.body,
            email:req.email
        }
        await createFav(favs)
        res.status(201).json(favs)
        console.log(req.body)
    
    }catch(err){
        console.error('error:', err)
    }
}



export const FavSCtrl  = async(req, res) => { // para el get
    
    const favs = await retrieveFav(req.email);
    res.json(favs);
};


export const DeleteUserfav= async (req, res) => {
    // llamo al usuario
    console.log(req.params)

    try {
        const fav = await deleteFav(req.params.id);
        res.json(fav); // deveulvo la info del usuario
    } catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
}


export const validateEmailCtrl = async (req, res) => {
    const { token } = req.query; // paso 1
    const valToken = await retrieveValidationToken(token); // paso 2
    if (valToken !== null) {
        // existe token
        await deleteValidationToken(token); // paso 3
        await validateUser(valToken.user); // paso 4
        res.send(200);
    } else {
        res.sendStatus(404);
    }
}