import multer from 'multer';
import { extname, resolve } from 'path';

const random = () => Math.floor(Math.random() * 1000 + 1000);

export default {

  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      // cb(error,wuhat you gonna do)
      // resolve use to give you the path of the file
      cb(null, resolve(__dirname, '..', '..', 'uploads'));
    },
    filename: (req, file, cb) => {
      // extname pick the type of file exmplo jpg, txt
      cb(null, `${Date.now()}_${random()}${extname(file.originalname)}`);
    },
  }),
};
