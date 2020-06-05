import { SelectItem } from './SelectItem';
import { ImageProps } from './Images';

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
  pictures: ImageProps[];
}
