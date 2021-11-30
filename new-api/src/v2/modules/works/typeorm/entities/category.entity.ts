import BasicEntity from '@modules/BasicEntity';
import { ApiProperty } from '@nestjs/swagger';

import { Column, Entity, ManyToMany } from 'typeorm';
import { EntityWork } from './work.entity';

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
    example: 'Latinoware 2019',
  })
  @Column({
    nullable: true,
    type: 'varchar',
  })
  description: string;

  //Relations
  @ApiProperty({
    type: EntityWork,
    description: 'Works that are of this Category',
    isArray: true,
  })
  @ManyToMany(() => EntityWork, (work) => work.categories, {
    cascade: ['update'],
  })
  works: EntityWork[];

  constructor(data?: Partial<EntityCategory>) {
    super();
    Object.assign(this, data);
  }
}
