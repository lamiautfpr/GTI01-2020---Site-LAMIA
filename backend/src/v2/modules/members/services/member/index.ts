import create from './createMember.service';
import remove from './deleteMember.service';
import findAll from './findAllMember.service';
import findByLogin from './findMemberByLogin.service';
import findById from './findMemberByID.service';
import updateProfileMember from './updateProfileMember.service';
import updateAvatar from './updateAvatarMember.service';
import updatePatent from './updatePatentMember.service';

export {
  create,
  remove,
  findAll,
  findByLogin,
  findById,
  updateProfileMember,
  updateAvatar,
  updatePatent,
};
