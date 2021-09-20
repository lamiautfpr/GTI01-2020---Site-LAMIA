import BasicEntity from '@modules/BasicEntity';
import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity } from 'typeorm';

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

  constructor(data?: Partial<EntityType>) {
    super();
    Object.assign(this, data);
  }
}
