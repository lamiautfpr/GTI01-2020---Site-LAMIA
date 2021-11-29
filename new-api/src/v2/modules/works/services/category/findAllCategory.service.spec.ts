import { FakeRepositoryCategory } from '@modules/works/repositories/fakes/Category.fakeRepository';
import NoContentException from '../../../../utils/Exceptions/NoContent.exception';
import { ServiceCategory } from '../category.service';

let fakeRepositoryCategory: FakeRepositoryCategory;
let categoryService: ServiceCategory;

describe('findAll Category - SERVICES', () => {
  beforeEach(() => {
    fakeRepositoryCategory = new FakeRepositoryCategory();
    categoryService = new ServiceCategory(fakeRepositoryCategory);
  });

  describe('successful cases', () => {
    it('should return an array of categories', async () => {
      fakeRepositoryCategory.createSave({
        name: 'Latinoware',
        description: 'Evento de código open source na America do Sul',
      });
      fakeRepositoryCategory.createSave({
        name: 'SICITE',
        description: 'Evento de aprensatação de Artigos Científicos',
      });
      const result = await categoryService.findAll({});

      expect(result.length).toBe(2);
      expect(result[0].name).toBe('Latinoware');
    });

    it('should return NO_CONTENT when not exists category', async () => {
      await expect(categoryService.findAll({})).rejects.toBeInstanceOf(
        NoContentException,
      );
    });
  });
});
