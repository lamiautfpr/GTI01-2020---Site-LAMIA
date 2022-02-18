/* eslint-disable @typescript-eslint/no-unused-vars */
import uploadConfig from '@config/upload';
import { InternalServerErrorException } from '@nestjs/common';
import * as fs from 'fs';
import { resolve } from 'path';
import ILocationFileDTO from '../../dtos/ILocationFile.dto';
import IStorageProvider from '../../models/IStorageProvider';

export default class FakeStorageProvider implements IStorageProvider {
  public async saveFile({
    fileName,
    targetFolder,
    subFolders = [],
  }: ILocationFileDTO): Promise<string> {
    return `fakeName-${fileName}`;
  }

  public async deleteFile({
    fileName,
    targetFolder,
    subFolders = [],
  }: ILocationFileDTO): Promise<void> {
    return;
  }

  public async getUrl({
    fileName,
    targetFolder,
    subFolders = [],
  }: ILocationFileDTO): Promise<string> {
    return `fakeURL-${fileName}`;
  }
}
