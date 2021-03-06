import BasicEntity from '@modules/BasicEntity';
import { Column, Entity } from 'typeorm';

@Entity('example')
export class ExampleEntity extends BasicEntity {
  @Column({
    nullable: false,
    type: 'varchar',
  })
  name: string;
}
