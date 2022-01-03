import IRepositoryMember from '@modules/members/repositories/IRepositoryMember';
import { EntityMember } from '@modules/members/typeorm/entities/member.entity';
import { UnauthorizedException } from '@nestjs/common';
import TARGET_FOLDER from '@providers/StorageProvider/enums/targetFolder.enum';
import IStorageProvider from '@providers/StorageProvider/models/IStorageProvider';

interface IRequest {
  repository: IRepositoryMember;
  loggedMember: EntityMember;
  storageProvider: IStorageProvider;
  fileName: string;
}

const updateAvatar = async ({
  repository,
  loggedMember,
  storageProvider,
  fileName,
}: IRequest): Promise<EntityMember> => {
  const targetFolder = TARGET_FOLDER.MEMBERS;

  if (loggedMember.avatar) {
    await storageProvider.deleteFile({
      fileName: loggedMember.avatar,
      targetFolder,
    });
  } else {
    loggedMember.avatar = fileName;
    await repository.updateSave({
      ...loggedMember,
      avatar: fileName,
    });
  }

  Object.assign(loggedMember, {
    avatar: fileName,
  });

  const memberWithNewAvatar = await repository.updateSave(loggedMember);

  await storageProvider.saveFile({
    fileName,
    targetFolder,
  });

  return memberWithNewAvatar;
};

export default updateAvatar;
