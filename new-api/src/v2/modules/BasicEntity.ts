import { ApiProperty } from '@nestjs/swagger';
import { CreateDateColumn, PrimaryColumn, UpdateDateColumn } from 'typeorm';
import { v4 as uuidV4 } from 'uuid';

export default class BasicEntity {
  @ApiProperty({
    example: 'b0a70c62-c0ba-40b3-acd9-1f39ba39fdb0',
    description: 'Unique identifier in the database',
  })
  @PrimaryColumn({
    nullable: false,
    type: 'varchar',
    unique: true,
  })
  id: string;

  @ApiProperty()
  @CreateDateColumn({
    nullable: false,
    unique: false,
  })
  createAt: Date;

  @ApiProperty()
  @UpdateDateColumn({
    nullable: false,
    unique: false,
  })
  updateAt: Date;

  constructor() {
    this.id = uuidV4();
  }
}
