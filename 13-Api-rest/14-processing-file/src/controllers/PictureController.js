import multer from 'multer';
import multerConfig from '../config/multerConfig';

// use multe to upload files
// .single(name you use on the insomnia on multipart)
const upload = multer(multerConfig).single('file');

class PictureController {
  async store(req, res) {
    return upload(req, res, (error) => {
      if (error) {
        return res.status(400).json({
          errors: [error.code],
        });
      }

      return res.json(req.file);
    });
  }
}

export default new PictureController();
