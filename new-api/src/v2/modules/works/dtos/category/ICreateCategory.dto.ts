import { ApiProperty } from '@nestjs/swagger';

import { IsDefined, IsNotEmpty, IsString, IsUUID } from 'class-validator';

export default class ICreateCategoryBasicDTO {
  @IsString()
  @IsNotEmpty()
  @IsDefined()
  @ApiProperty({
    description: 'Category name',
    example: 'Latinoware event',
  })
  name: string;

  @IsString()
  @IsNotEmpty()
  @IsDefined()
  @ApiProperty({
    description: 'Description of category',
    example: 'Latinoware event at 2020, where I study Linux!',
  })
  description: string;
}

export class ICreateCategoryDTO {
  @IsDefined()
  category: ICreateCategoryBasicDTO;

  @IsDefined()
  @IsUUID()
  idMember: string;
}
