import { ApiProperty } from '@nestjs/swagger';
import {
  IsDefined,
  IsEmail,
  IsNotEmpty,
  IsString,
  IsUUID,
} from 'class-validator';

export default class ICreateMemberDTO {
  @IsString()
  @IsNotEmpty()
  @IsDefined()
  @ApiProperty({
    description: "Member's name",
    example: 'John Doe',
  })
  name: string;

  @IsString()
  @IsNotEmpty()
  @IsDefined()
  @IsEmail()
  @ApiProperty({
    description: "Member's email",
    example: 'john_doe@lamia.sh.utfpr.edu.br',
  })
  email: string;

  @IsString()
  @IsNotEmpty()
  @IsDefined()
  @IsUUID()
  @ApiProperty({
    description: "Member's patent",
    example: '2bac045b-7109-473f-af2a-32234b067694',
  })
  patentId: string;
}
