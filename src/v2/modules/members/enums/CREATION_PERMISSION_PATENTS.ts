import { getValues } from '../../../utils/handleEnums';

enum CREATION_PERMISSION_PATENTS {
  ADMINISTRATOR = 'd4975451-c598-4af4-9a3b-070df207dab7',
  COORDINATOR = 'ff4332f2-a870-48d7-861f-4cf14f4e228f',
  ADVISOR = 'a278f769-f860-4a09-a5c9-d70b79e15526',
}

export const hasCreatePermission = (ppatentId: string): boolean =>
  getValues(CREATION_PERMISSION_PATENTS).includes(ppatentId);

export const hasDeletePermission = (ppatentId: string): boolean =>
  getValues(CREATION_PERMISSION_PATENTS).includes(ppatentId);

export default CREATION_PERMISSION_PATENTS;
