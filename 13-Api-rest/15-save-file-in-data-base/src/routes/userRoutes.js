import { Router } from 'express';
import UserController from '../controllers/UserController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// shouldn't exist
router.get('/', UserController.index); // Users list
router.get('/:id', UserController.show); // User list

router.post('/', UserController.store);
router.put('/', loginRequired, UserController.update);
router.delete('/', loginRequired, UserController.delete);

export default router;

/*
index -> list all user -> GET
store/create -> create new user -> POST
delete -> delet the user -> DELETE
show -> show the user -> GET
update -> update the user -> PATCH or PUT
*/
