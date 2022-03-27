import { retrieveUserInfoByEmail,deleteUserInfoByEmail,patchUserEmail,patchUserName } from './users.model.js';

export const getUserInfo = async (req, res) => {
    // llamo al usuario
    try {
        const user = await retrieveUserInfoByEmail(req.email);
        res.json(user); // deveulvo la info del usuario
    } catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
}


export const DeleteUserInfo = async (req, res) => {
    // llamo al usuario
    try {
        const user = await deleteUserInfoByEmail(req.email);
        res.json(user); // deveulvo la info del usuario
    } catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
}


export const updateEmailCtrl = async(req,res) => {
    const {id} = req.params
    const userNew = {
        email:req.body.email,
    }
    const updatedEmail = await patchUserEmail(id,userNew)   
    res.json(updatedEmail)
};

export const updateNameCtrl = async(req,res) => {
    const {id} = req.params
    const userNew = {
        name:req.body.name,
    }
    const updateName = await patchUserName(id,userNew)   
    res.json(updateName)
}
