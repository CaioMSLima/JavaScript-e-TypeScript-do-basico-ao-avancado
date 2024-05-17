import { Router } from 'express';
import homecontroller from '../controllers/Homeontroller';

const router = new Router();

router.get('/', homecontroller.index);

export default router;
