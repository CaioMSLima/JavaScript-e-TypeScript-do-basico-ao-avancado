import multer from 'multer';
import multerConfig from '../config/multerConfig';

import Photo from '../models/Photo';

// use multe to upload files
// .single(name you use on the insomnia on multipart)
const upload = multer(multerConfig).single('file');

class PictureController {
  store(req, res) {
    return upload(req, res, async (error) => {
      if (error) {
        return res.status(400).json({
          errors: [error.code],
        });
      }
      const { originalname, filename } = req.file;
      const { student_id } = req.body;
      const photo = await Photo.create({ originalname, filename, student_id });

      return res.json(photo);
    });
  }
}

export default new PictureController();
