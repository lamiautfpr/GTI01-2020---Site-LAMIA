import { ForbiddenException, UnauthorizedException } from '@nestjs/common';
import { ERRORS_UNAUTHORIZED } from '@utils/Errors/Unauthorized';
import { diskStorage, Options } from 'multer';
import { resolve } from 'path';
import { apiConfig } from './api';

const tmpFolder = resolve(__dirname, '..', '..', '..', 'tmp');
export const AllowedImagesType = [
  'image/png',
  'image/jpg',
  'image/jpeg',
  'image/gif',
];
const maxSize = 10; // MB

interface IUploadConfig {
  driver: 'disk' | 'S3';
  url: string;
  tmpFolder: string;
  uploadsFolder: string;
  maxSize: number;

  multer: Options;
}

export default {
  driver: process.env.STORAGE_DRIVER,
  url: `${apiConfig.apiUrl}${apiConfig.pathFileStatic}/`,

  tmpFolder,
  uploadsFolder: resolve(tmpFolder, 'upload'),
  maxSize,

  multer: {
    limits: { fileSize: maxSize * 1000000 },

    storage: diskStorage({
      destination: tmpFolder,
      filename(request, _, callback) {
        const member = request.user as { userId: string };

        if (!member) {
          throw new UnauthorizedException([
            ERRORS_UNAUTHORIZED.YOU_NEED_TO_BE_LOGGED_IN,
          ]);
        }

        const fileName = `${Date.now()}-${member.userId}.jpg`;

        return callback(null, fileName);
      },
    }),

    fileFilter: (_, file, cb) => {
      const permitido = AllowedImagesType.find(
        (formatoAceito) => formatoAceito === file.mimetype,
      );

      if (permitido) {
        cb(null, true);
      } else {
        cb(null, false);
        return cb(
          new ForbiddenException(
            `Allowed only images of the type: ${AllowedImagesType}`,
          ),
        );
      }
    },
  },
} as IUploadConfig;
