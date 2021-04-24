import { ApiProperty } from '@nestjs/swagger';
import { IsDefined, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export default class ICreateOfficeMemberDTO {
  @IsString()
  @IsNotEmpty()
  @IsDefined()
  @ApiProperty({
    description: 'Name of office member',
    example: 'Novato',
  })
  name: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  @ApiProperty({
    description: 'Descriptions of office member',
    example: 'Os novatos são os alunos que acabaram de iniciar no laboratório',
    required: false,
  })
  description?: string;
}
