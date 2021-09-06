import BasicEntity from '@modules/BasicEntity';
import { ApiProperty } from '@nestjs/swagger';

import { Column, Entity } from 'typeorm';

@Entity('tb_category')
export class EntityCategory extends BasicEntity {
  @ApiProperty({
    description: 'Name of category',
    example: 'Evento',
  })
  @Column({
    nullable: false,
    type: 'varchar',
  })
  name: string;

  @ApiProperty({
    description: 'Description of Category',
    example: 'Latinoware 2019'
  })
  @Column({
    nullable: true,
    type: 'varchar',
  })
  description: string;
}
