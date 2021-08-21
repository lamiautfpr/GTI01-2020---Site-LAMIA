import BasicEntity from '@modules/BasicEntity';
import { EntityOfficeMember } from '@modules/members/typeorm/entities/officeMember.entity';
import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity } from 'typeorm';

@Entity('tb_area_expertise')
export class EntityAreaExpertise extends BasicEntity {
  // Definindo os parametros do ID
  @ApiProperty({
    description: 'Name of area expertise',
    example: 'Cientista de computadores',
  })
  @Column({
    nullable: false,
    type: 'varchar',
    unique: true,
  })
  name: string;

  // Description

  @ApiProperty({
    description: 'Description of Area Expertise',
  })
  @Column({
    nullable: true,
    type: 'varchar',
  })
  description: string;
}
