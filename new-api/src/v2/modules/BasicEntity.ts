import { CreateDateColumn, PrimaryColumn, UpdateDateColumn } from 'typeorm';

import { v4 as uuidV4 } from 'uuid';

export default class BasicEntity {
  @PrimaryColumn({
    nullable: false,
    type: 'varchar',
    unique: true,
  })
  id: string;

  @CreateDateColumn({
    nullable: false,
    unique: false,
  })
  createAt: Date;

  @UpdateDateColumn({
    nullable: false,
    unique: false,
  })
  updateAt: Date;

  constructor() {
    this.id = uuidV4();
  }
}
