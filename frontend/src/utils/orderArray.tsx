import { TypeWork } from '../../myTypes/TypeWork';

export const compareTitleASC = (work1: TypeWork, work2: TypeWork): number => {
  // a should come before b in the sorted order
  if (work1.title < work2.title) {
    return -1;
    // a should come after b in the sorted order
  }
  if (work1.title > work2.title) {
    return 1;
    // a and b are the same
  }
  return 0;
};

export const compareTitleDESC = (work1: TypeWork, work2: TypeWork): number => {
  // a should come before b in the sorted order
  if (work1.title > work2.title) {
    return -1;
    // a should come after b in the sorted order
  }
  if (work1.title < work2.title) {
    return 1;
    // a and b are the same
  }
  return 0;
};
