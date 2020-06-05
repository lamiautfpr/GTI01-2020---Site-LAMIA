import { WorkListProps } from '../../myTypes/WorkListProps';

export const compareTitleASC = (
  work1: WorkListProps,
  work2: WorkListProps,
): number => {
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

export const compareTitleDESC = (
  work1: WorkListProps,
  work2: WorkListProps,
): number => {
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

export const compareDateASC = (
  work1: WorkListProps,
  work2: WorkListProps,
): number => {
  // a should come before b in the sorted order
  if (work1.dateBegin < work2.dateBegin) {
    return -1;
    // a should come after b in the sorted order
  }
  if (work1.dateBegin > work2.dateBegin) {
    return 1;
    // a and b are the same
  }
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

export const compareDateDESC = (
  work1: WorkListProps,
  work2: WorkListProps,
): number => {
  // a should come before b in the sorted order
  if (work1.dateBegin > work2.dateBegin) {
    return -1;
    // a should come after b in the sorted order
  }
  if (work1.dateBegin < work2.dateBegin) {
    return 1;
    // a and b are the same
  }
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
