import multer from 'multer';
import crypto from 'crypto';
import { extname, resolve } from 'path';

const folderUpload = resolve(__dirname, '..', '..', 'tmp', 'uploads');

export default {
  folderUpload,
  storage: multer.diskStorage({
    destination: folderUpload,
    filename: (req, file, cb) => {
      crypto.randomBytes(16, (err, res) => {
        if (err) return cb(err);

        return cb(null, res.toString('hex') + extname(file.originalname));
      });
    },
  }),
};
