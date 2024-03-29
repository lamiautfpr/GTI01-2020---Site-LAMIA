import BasicEntity from '@modules/BasicEntity';
import { Column, Entity } from 'typeorm';

@Entity('tb_refresh_token')
export class EntityRefreshToken extends BasicEntity {
  @Column({
    type: 'varchar',
    length: 255,
  })
  hash: string;

  @Column({
    type: 'varchar',
    length: 100,
  })
  login: string;

  @Column({
    type: 'boolean',
    default: true,
  })
  status: boolean;

  constructor(data?: Partial<EntityRefreshToken>) {
    super();
    Object.assign(this, data);
  }
}
