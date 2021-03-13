import { EntityOfficeMember } from '../typeorm/officeMember.entity';

type IOrderOfficeMemberDTO = {
  [K in keyof EntityOfficeMember]?: 'ASC' | 'DESC';
};

export default IOrderOfficeMemberDTO;
