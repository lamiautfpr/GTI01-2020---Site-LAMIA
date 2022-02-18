import uploadConfig from '@config/upload';
import { Provider } from '@nestjs/common';
import DiskStorageProvider from './implementations/DiskStorage.provider';

// TODO: Tipar o objeto de configuração
const providers = {
  disk: DiskStorageProvider,
};

export const StorageProvider = providers[uploadConfig.driver || 'disk'];

export default {
  provide: 'StorageProvider',
  useClass: StorageProvider,
} as Provider;
