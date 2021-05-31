import { EntityOfficeMember } from '@modules/members/typeorm/entities/officeMember.entity';
import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tb_area_expertise')
export class EntityAreaExpertise extends EntityOfficeMember {
  // Definindo os parametros do ID
  @PrimaryGeneratedColumn()
  id: string;

  // Atributo CreateAt
  @ApiProperty({
    nullable: false,
    description: '',
  })
  @Column({
    nullable: false,
    type: 'date',
  })
  createAt: Date;

  // Atributo UpdateAt
  @ApiProperty({
    nullable: false,
    description: 'Define a ultima atualização no dado',
  })
  @Column({
    nullable: false,
    type: 'date',
  })
  updateAt: Date;
}
