import ILocationFileDTO from '../dtos/ILocationFile.dto';

export default interface IStorageProvider {
  saveFile(data: ILocationFileDTO): Promise<string>;
  deleteFile(data: ILocationFileDTO): Promise<void>;
  getUrl(file: string): Promise<string>;
}
