import { IsDefined, IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class IResetPasswordMemberDTO {
  @IsString()
  @IsNotEmpty()
  @IsDefined()
  @IsUUID()
  loggedMemberId: string;

  @IsString()
  @IsNotEmpty()
  @IsDefined()
  @IsUUID()
  updatedMemberLogin: string;
}
