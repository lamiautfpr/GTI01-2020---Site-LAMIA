import Picture from '../models/Picture';

class FileController {
  async store(req, res) {
    const { originalname: name, filename: path } = req.file;

    const picture = await Picture.create({ name, path });

    return res.json({ picture });
  }
}

export default new FileController();
