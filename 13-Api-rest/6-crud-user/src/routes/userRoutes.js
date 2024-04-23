import { Router } from 'express';
import UserController from '../controllers/UserController';

const router = new Router();

router.post('/', UserController.store);

export default router;

/*
index -> list all user -> GET
store/create -> create new user -> POST
delete -> delet the user -> DELETE
show -> show the user -> GET
update -> update the user -> PATCH or PUT
*/
