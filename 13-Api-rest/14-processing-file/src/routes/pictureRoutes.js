import { Router } from 'express';

import PictureController from '../controllers/PictureController';

const router = new Router();

router.post('/', PictureController.store);

export default router;
