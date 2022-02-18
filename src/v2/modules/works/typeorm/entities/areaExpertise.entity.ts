import BasicEntity from '@modules/BasicEntity';
import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, ManyToMany } from 'typeorm';
import { EntityWork } from './work.entity';

@Entity('tb_area_expertise')
export class EntityAreaExpertise extends BasicEntity {
  @ApiProperty({
    description: 'Name of Area Expertise',
    example: 'Ciência de Dados',
  })
  @Column({
    nullable: false,
    type: 'varchar',
    unique: true,
  })
  name: string;

  @ApiProperty({
    description: 'Description of Area Expertise',
    example: 'Ciência de Dados é...',
  })
  @Column({
    nullable: true,
    type: 'varchar',
  })
  description: string;

  //Relations
  @ApiProperty({
    type: EntityWork,
    description: 'Works that are of this Expertise Area',
    isArray: true,
  })
  @ManyToMany(() => EntityWork, (work) => work.areaExpertise, {
    cascade: ['update'],
  })
  works: EntityWork[];

  constructor(data?: Partial<EntityAreaExpertise>) {
    super();
    Object.assign(this, data);
  }
}
