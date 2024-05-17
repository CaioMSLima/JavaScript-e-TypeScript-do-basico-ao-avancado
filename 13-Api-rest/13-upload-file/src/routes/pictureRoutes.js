import { Router } from 'express';
import multer from 'multer';

import PictureController from '../controllers/PictureController';
import multerConfig from '../config/multerConfig';

// use multe to upload files
const upload = multer(multerConfig);

const router = new Router();

// .single(name you use on the insomnia on multipart)
router.post('/', upload.single('file'), PictureController.store);

export default router;
