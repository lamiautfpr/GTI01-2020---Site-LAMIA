import BasicEntity from '@modules/BasicEntity';
import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, ManyToMany } from 'typeorm';
import { EntityWork } from './work.entity';

@Entity('tb_type')
export class EntityType extends BasicEntity {
  @ApiProperty({
    description: 'Name of Types',
    example: 'Pesquisa Científica',
  })
  @Column({
    nullable: false,
    type: 'varchar',
    unique: true,
  })
  name: string;

  @ApiProperty({
    description: 'Description of Types',
    example: 'Pesquisa Científica é ...',
  })
  @Column({
    nullable: true,
    type: 'varchar',
  })
  description: string;

  //Relations
  @ApiProperty({
    type: EntityWork,
    description: 'Works that are of this type',
    isArray: true,
  })
  @ManyToMany(() => EntityWork, (work) => work.types, {
    cascade: ['update'],
  })
  works: EntityWork[];

  constructor(data?: Partial<EntityType>) {
    super();
    Object.assign(this, data);
  }
}
