import { resolve } from 'path';
import fs from 'fs';
import uploadConfig from '../../config/multer';
import Picture from '../models/Picture';
import Member from '../models/Member';

class MemberAvatarController {
  async update(req, res) {
    const member = await Member.findByPk(req.userId);
    const { originalname: name, filename: path } = req.file;

    if (!member) {
      return res.status(401).json({ error: 'Integrante não encontrado!' });
    }
    if (!member.avatar_id) {
      const picture = await Picture.create({ name, path });
      console.log(member.avatar_id);
      return res.json(picture);
    }
    const picture = await Picture.findByPk(member.avatar_id);
    const filePath = resolve(uploadConfig.folderUpload, picture.path);

    await fs.promises.unlink(filePath);

    await picture.update({ name, path });

    return res.json(picture);
  }
}

export default new MemberAvatarController();
