import { ApiProperty } from '@nestjs/swagger';
import {
  IsDefined,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUUID,
  Matches,
  MaxLength,
  MinLength,
  ValidateIf,
} from 'class-validator';

const RegExpStrongPassword = new RegExp(
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@@#\$%\^&\*])(?=.{8,})/,
);

export class IUpdateMemberBasicDataDTO {
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  @ApiProperty({
    description: "Member's name",
    example: 'John Doe',
  })
  name: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  @IsEmail()
  @ApiProperty({
    description: "Member's email",
    example: 'john_doe@lamia.sh.utfpr.edu.br',
    uniqueItems: true,
  })
  email: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  @ApiProperty({
    description: "Member's login",
    example: 'john_doe',
    uniqueItems: true,
  })
  login: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  @ApiProperty({
    nullable: true,
    description: "Member's linkedin",
    example: 'john_doe',
    uniqueItems: true,
  })
  linkedin: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  @ApiProperty({
    nullable: true,
    description: "Member's Git Hub",
    example: 'john_doe',
    uniqueItems: true,
  })
  gitHub: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  @ApiProperty({
    nullable: true,
    description: "Member's Lattes",
    example: 'john_doe',
    uniqueItems: true,
  })
  lattes: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  @ApiProperty({
    nullable: true,
    description: 'Member quote name',
    example: 'DOE John',
  })
  quoteName: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  @MaxLength(150)
  @ApiProperty({
    nullable: true,
    description: "Member's description",
    example: "I'm student computer science in SH UTFPR",
  })
  description: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  @ValidateIf((obj) => !!obj.newPassword)
  @IsDefined()
  oldPassword: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  @Matches(RegExpStrongPassword, {
    message:
      'New password must contain: Special Characters; Upper and Lower Letter; Number',
  })
  @ValidateIf((obj) => !!obj.oldPassword)
  @IsDefined()
  newPassword: string;
}

export class IUpdatePatentMemberRequestDTO {
  @IsString()
  @IsNotEmpty()
  @IsDefined()
  @IsUUID()
  @ApiProperty({
    description: "New member's patent",
    example: 'cac74bdb-a088-4c58-8fb6-ca11fa076d6d',
  })
  newPatentId: string;
}

export class IUpdatePatentMemberDTO {
  @IsString()
  @IsNotEmpty()
  @IsDefined()
  @IsUUID()
  newPatentId: string;

  @IsString()
  @IsNotEmpty()
  @IsDefined()
  @IsUUID()
  idMemberLogged: string;

  @IsString()
  @IsNotEmpty()
  @IsDefined()
  @IsUUID()
  updatedMemberLogin: string;
}

export class IUpdateMemberDTO {
  @IsDefined()
  newMemberData: IUpdateMemberBasicDataDTO;

  @IsDefined()
  @IsUUID()
  idMember: string;
}
