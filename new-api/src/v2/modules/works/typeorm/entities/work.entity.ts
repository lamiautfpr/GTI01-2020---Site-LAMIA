import BasicEntity from '@modules/BasicEntity';
import { EntityMember } from '@modules/members/typeorm/entities/member.entity';
import { ApiProperty } from '@nestjs/swagger';

import { Column, Entity, JoinTable, ManyToMany } from 'typeorm';
import { EntityAreaExpertise } from './areaExpertise.entity';
import { EntityCategory } from './category.entity';
import { EntityType } from './type.entity';

@Entity('tb_work')
export class EntityWork extends BasicEntity {
  @ApiProperty({
    description: "Work's intenal code",
    example: 'IC01/2019',
    uniqueItems: true,
  })
  @Column({
    nullable: false,
    type: 'varchar',
    unique: true,
  })
  internalCode: string;

  @ApiProperty({
    description: "Work's title",
    example: 'Dashboard Covid Paraná',
    maxLength: 255,
  })
  @Column({
    nullable: false,
    type: 'varchar',
  })
  title: string;

  @ApiProperty({
    description: "Work's URL",
    example: 'Dashboard Covid Paraná',
    uniqueItems: true,
    maxLength: 255,
  })
  @Column({
    nullable: false,
    unique: true,
    type: 'varchar',
  })
  slug: string;

  @ApiProperty({
    description: "Work's objective",
    example:
      'Para apresentar a evoluçãod dados da pandemia do Covid foi desenvolvido um dashboard utilizando analise de dados.',
    nullable: true,
  })
  @Column({
    nullable: true,
    type: 'text',
  })
  objective?: string;

  @ApiProperty({
    description: "Work's Github URL",
    example: 'https://github.com/lamiautfpr/GTI01-2020---Site-LAMIA',
    uniqueItems: true,
    maxLength: 255,
  })
  @Column({
    nullable: true,
    type: 'varchar',
    unique: true,
  })
  github?: string;

  @ApiProperty({
    description: "Work's start date",
    example: '2020-04-01',
  })
  @Column({
    nullable: false,
    type: 'date',
  })
  startDate: Date;

  @ApiProperty({
    description: "Work's end date",
    example: '2020-04-01',
    nullable: true,
  })
  @Column({
    nullable: true,
    type: 'date',
  })
  endDate?: Date;

  @ApiProperty({
    description: 'Flag to leave public work',
    example: true,
    default: false,
  })
  @Column({
    nullable: false,
    type: 'boolean',
    default: false,
  })
  visible: boolean;

  //Relations
  @ApiProperty({
    type: EntityMember,
    description: 'Members participating in the work',
    isArray: true,
  })
  @ManyToMany(() => EntityMember, (member) => member.works, {
    cascade: ['update', 'remove'],
  })
  @JoinTable()
  members: EntityMember[];

  @ApiProperty({
    type: EntityAreaExpertise,
    description: 'The Expertise Areas of this work',
    isArray: true,
  })
  @ManyToMany(
    () => EntityAreaExpertise,
    (areaExpertise) => areaExpertise.works,
    {
      cascade: ['update', 'remove'],
    },
  )
  @JoinTable()
  areaExpertise: EntityAreaExpertise[];

  @ApiProperty({
    type: EntityCategory,
    description: 'The Categories of this work',
    isArray: true,
  })
  @ManyToMany(() => EntityCategory, (category) => category.works, {
    cascade: ['update', 'remove'],
  })
  @JoinTable()
  categories: EntityCategory[];

  @ApiProperty({
    type: EntityType,
    description: 'The Types of this work',
    isArray: true,
  })
  @ManyToMany(() => EntityType, (type) => type.works, {
    cascade: ['update', 'remove'],
  })
  @JoinTable()
  types: EntityType[];

  constructor(data?: Partial<EntityWork>) {
    super();
    Object.assign(this, data);
  }
}
