import BasicEntity from '@modules/BasicEntity';
import { EntityWork } from '@modules/works/typeorm/entities/work.entity';
import { ApiProperty } from '@nestjs/swagger';
import { StorageProvider } from '@providers/StorageProvider';
import TARGET_FOLDER from '@providers/StorageProvider/enums/targetFolder.enum';
import { Exclude, Transform } from 'class-transformer';
import { Column, Entity, ManyToMany, ManyToOne } from 'typeorm';
import { EntityPatent } from './patent.entity';

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

  @ApiProperty({
    nullable: true,
    description: "Member's avatar URL",
    example: `${process.env.URL_API}${process.env.PATH_FILE_STATIC}/${TARGET_FOLDER.MEMBERS}/img.jpg`,
  })
  @Transform(async ({ value }) => {
    const storageProvider = new StorageProvider();

    return !value
      ? null
      : await storageProvider.getUrl({
          fileName: value,
          targetFolder: TARGET_FOLDER.MEMBERS,
        });
  })
  @Column({
    nullable: true,
    type: 'varchar',
    unique: true,
  })
  avatar: string;

  @Exclude()
  @Column({
    nullable: false,
    type: 'varchar',
  })
  password: string;

  //Relations
  @ApiProperty({
    type: EntityPatent,
    description: "Member's patent",
    example: {
      name: 'Notavo',
      id: '2bac045b-7109-473f-af2a-32234b067694',
      description: 'Lab freshman',
    } as EntityPatent,
  })
  @ManyToOne(() => EntityPatent, (patent) => patent.members, {
    eager: true,
    nullable: false,
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE',
  })
  patent: EntityPatent;

  @ApiProperty({
    type: EntityWork,
    description: 'Works that the member participated',
    isArray: true,
  })
  @ManyToMany(() => EntityWork, (work) => work.members, {
    cascade: ['update'],
  })
  works: EntityWork[];

  constructor(data?: Partial<EntityMember>) {
    super();
    Object.assign(this, data);
  }
}
