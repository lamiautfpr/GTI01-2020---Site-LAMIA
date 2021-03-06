import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('example')
export class ExampleEntity {
  @PrimaryColumn({
    nullable: false,
    type: 'varchar',
  })
  id: string;

  @Column({
    nullable: false,
    type: 'varchar',
  })
  name: string;
}
