import BasicEntity from '@modules/BasicEntity';
import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, OneToMany } from 'typeorm';
import { EntityMember } from './member.entity';

@Entity('tb_office_member')
export class EntityOfficeMember extends BasicEntity {
  @ApiProperty({
    description: 'Name of office member',
    example: 'Novato',
  })
  @Column({
    nullable: false,
    type: 'varchar',
    unique: true,
  })
  name: string;

  @ApiProperty({
    nullable: true,
    description: 'Descriptions of office member',
    example: 'Os novatos são os alunos que acabaram de iniciar no laboratório',
  })
  @Column({
    nullable: true,
    type: 'text',
  })
  description: string;

  @OneToMany(() => EntityMember, (member) => member.patent)
  members: EntityMember[];
}
