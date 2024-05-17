import { Router } from 'express';

import PictureController from '../controllers/PictureController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.post('/', loginRequired, PictureController.store);

export default router;
