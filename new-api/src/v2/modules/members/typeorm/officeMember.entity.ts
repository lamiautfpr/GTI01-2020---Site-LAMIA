import BasicEntity from '@modules/BasicEntity';
import { Column, Entity } from 'typeorm';

@Entity('tb_office_member')
export class EntityOfficeMember extends BasicEntity {
  @Column({
    nullable: false,
    type: 'varchar',
  })
  name: string;

  @Column({
    nullable: true,
    type: 'text',
  })
  description: string;
}
