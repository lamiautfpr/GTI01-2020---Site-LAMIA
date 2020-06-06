import { SelectItem } from './SelectItem';
import { ImageProps } from './Images';

interface MemberProps {
  nameABNT: string;
  login: string;
  avatar: ImageProps | null;
}

interface WorksMemberProps {
  scholarship: boolean;
  memberData: MemberProps;
}

interface CategoryProps {
  router: string;
  name: string;
  description: string | null;
}

interface PatnerProps {
  id: number;
  name: string;
  logo: string;
  link_page: string;
}

export interface WorkListProps {
  id: number;
  title: string;
  objective: string;
  abstract: string;
  categories: CategoryProps[];
  types: SelectItem[];
  areaExpertise: SelectItem[];
  worksMember: WorksMemberProps[];
  partner: PatnerProps | null;
  dateBegin: Date;
  pictures: ImageProps[];
  urlGithub?: string;
}
