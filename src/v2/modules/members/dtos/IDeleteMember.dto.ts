import { IsDefined, IsNotEmpty, IsString, IsUUID } from 'class-validator';

export default class IDeleteMemberDTO {
  @IsString()
  @IsNotEmpty()
  @IsDefined()
  @IsUUID()
  idMemberLogged: string;

  @IsString()
  @IsNotEmpty()
  @IsDefined()
  @IsUUID()
  idMemberToDelete: string;
}
