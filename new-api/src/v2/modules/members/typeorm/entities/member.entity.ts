import BasicEntity from '@modules/BasicEntity';
import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, ManyToOne } from 'typeorm';
import { EntityOfficeMember } from './officeMember.entity';

@Entity('tb_member')
export class EntityMember extends BasicEntity {
  @ApiProperty({
    description: "Member's name",
    example: 'John Doe',
  })
  @Column({
    nullable: false,
    type: 'varchar',
  })
  name: string;

  @ApiProperty({
    nullable: false,
    description: "Member's email",
    example: 'johndoe@lamia.sh.utfpr.edu.br',
    uniqueItems: true,
  })
  @Column({
    nullable: false,
    type: 'varchar',
    unique: true,
  })
  email: string;

  @ApiProperty({
    nullable: false,
    description: "Member's login",
    example: 'john_doe',
    uniqueItems: true,
  })
  @Column({
    nullable: false,
    type: 'varchar',
    unique: true,
  })
  login: string;

  @ApiProperty({
    type: EntityOfficeMember,
    description: "Member's patent",
    example: {
      name: 'Notavo',
      id: '2bac045b-7109-473f-af2a-32234b067694',
      description: 'Lab freshman',
    } as EntityOfficeMember,
  })
  @ManyToOne(() => EntityOfficeMember, (patent) => patent.members, {
    eager: true,
    nullable: false,
  })
  patent: EntityOfficeMember;

  @ApiProperty({
    nullable: true,
    description: "Member's linkedin",
    example: 'john_doe',
    uniqueItems: true,
  })
  @Column({
    nullable: true,
    type: 'varchar',
    unique: true,
  })
  linkedin: string;

  @ApiProperty({
    nullable: true,
    description: "Member's Git Hub",
    example: 'john_doe',
    uniqueItems: true,
  })
  @Column({
    nullable: true,
    type: 'varchar',
    unique: true,
  })
  gitHub: string;

  @ApiProperty({
    nullable: true,
    description: "Member's Lattes",
    example: 'john_doe',
    uniqueItems: true,
  })
  @Column({
    nullable: true,
    type: 'varchar',
    unique: true,
  })
  lattes: string;

  @ApiProperty({
    nullable: true,
    description: 'Member quote name',
    example: 'DOE John',
  })
  @Column({
    nullable: true,
    type: 'varchar',
    unique: true,
  })
  quoteName: string;

  @ApiProperty({
    nullable: true,
    description: "Member's description",
    example: "I'm student computer science in SH UTFPR",
  })
  @Column({
    nullable: true,
    type: 'text',
  })
  description: string;

  @Column({
    nullable: true,
    type: 'varchar',
    unique: true,
  })
  avatar: string;

  @Column({
    nullable: false,
    type: 'varchar',
  })
  password: string;
}
