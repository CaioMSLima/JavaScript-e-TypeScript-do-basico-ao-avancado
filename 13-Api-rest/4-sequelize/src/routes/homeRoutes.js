import { Router } from 'express';
import homeontroller from '../controllers/Homeontroller';

const router = new Router();

router.get('/', homeontroller.index);

export default router;
