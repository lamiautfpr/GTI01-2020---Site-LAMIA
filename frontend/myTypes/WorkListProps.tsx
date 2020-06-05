import { SelectItem } from './SelectItem';

interface MemberProps {
  nameABNT: string;
}

interface WorksMemberProps {
  id: number;
  member: MemberProps;
}

export interface WorkListProps {
  id: number;
  title: string;
  objective: string;
  types: SelectItem[];
  areaExpertise: SelectItem[];
  worksMember: WorksMemberProps[];
  dateBegin: Date;
}
