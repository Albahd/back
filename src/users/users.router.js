import express from 'express';
import { getUserInfo,DeleteUserInfo,updateEmailCtrl,updateNameCtrl } from './users.controller.js';

const router = express.Router();

router.route('/')
    .get(getUserInfo)
    .delete(DeleteUserInfo)
router.route('/:id')
    // .patch(updateEmailCtrl)
    .patch(updateNameCtrl)


export default router;