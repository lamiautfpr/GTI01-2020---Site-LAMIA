import { resolve } from 'path';
import fs from 'fs';
import uploadConfig from '../../config/multer';
import Picture from '../models/Picture';
import Member from '../models/Member';
import TypeMember from '../models/TypeMember';

class MemberAvatarController {
  async update(req, res) {
    const member = await Member.findByPk(req.userId, {
      include: [
        {
          model: TypeMember,
          as: 'office',
          attributes: ['name', 'label', 'id', 'value'],
        },
        {
          model: Picture,
          as: 'avatar',
          attributes: ['name', 'path', 'src'],
        },
      ],
    });
    const { originalname: name, filename: path } = req.file;

    if (!member) {
      return res.status(401).json({ error: 'Integrante não encontrado!' });
    }
    if (!member.avatar_id) {
      const picture = await Picture.create({ name, path });
      member.update({ avatar_id: picture.id, avatar: picture });

      return res.json(member);
    }

    const picture = await Picture.findByPk(member.avatar_id);
    const filePath = resolve(uploadConfig.folderUpload, picture.path);

    try {
      await fs.promises.unlink(filePath);
      // eslint-disable-next-line no-empty
    } catch (err) {}

    await picture.update({ name, path });
    member.update({ avatar_id: picture.id, avatar: picture });

    return res.json(member);
  }
}

export default new MemberAvatarController();
