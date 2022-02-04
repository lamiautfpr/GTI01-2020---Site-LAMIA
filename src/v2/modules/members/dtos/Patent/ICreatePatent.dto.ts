import { EntityMember } from '@modules/members/typeorm/entities/member.entity';
import { ApiProperty } from '@nestjs/swagger';
import {
  IsDefined,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';

export default class ICreatePatentBasicDataDTO {
  @IsString()
  @IsNotEmpty()
  @IsDefined()
  @ApiProperty({
    description: "Patent's name",
    example: 'Novato',
  })
  name: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  @ApiProperty({
    description: "Patent's description",
    example: 'Os novatos são os alunos que acabaram de iniciar no laboratório',
    required: false,
  })
  description?: string;
}

export class ICreatePatentDTO {
  @IsDefined()
  newPatentData: ICreatePatentBasicDataDTO;

  @IsDefined()
  @IsUUID()
  idMember: string;
}

export interface ICreatePatentServiceDTO
  extends Omit<ICreatePatentDTO, 'idMember'> {
  member: EntityMember;
}
