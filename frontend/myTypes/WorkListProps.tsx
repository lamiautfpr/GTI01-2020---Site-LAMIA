export interface AttributesProps {
  id: number;
  name: string;
}

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
  types: AttributesProps[];
  areaExpertise: AttributesProps[];
  worksMember: WorksMemberProps[];
}
