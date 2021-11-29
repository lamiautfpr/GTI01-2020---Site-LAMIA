import { ApiProperty } from '@nestjs/swagger';
import {
  IsDefined,
  IsNotEmpty,
  IsString,
  IsOptional,
  IsUUID,
} from 'class-validator';

export default class ICreateTypeBasicDTO {
  @IsString()
  @IsNotEmpty()
  @IsDefined()
  @ApiProperty({
    description: 'Name of Type',
    example: 'Pesquisa Científica',
    required: true,
  })
  name: string;

  @IsNotEmpty()
  @IsString()
  @IsOptional()
  @ApiProperty({
    description: 'Description of Type',
    example: 'Pesquisa Científica é...',
    required: false,
  })
  description?: string;
}
export class ICreateTypeDTO {
  @IsDefined()
  type: ICreateTypeBasicDTO;

  @IsDefined()
  @IsUUID()
  idMember: string;
}
