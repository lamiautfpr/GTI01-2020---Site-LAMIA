import IOrderWorkDTO from '@modules/works/dtos/work/IOrderByWork.dto';
import IPaginationWorkDTO, {
  IPaginationReponseDTO,
  IPaginationWorkReponseDTO,
} from '@modules/works/dtos/work/IPaginationWork.dto';
import IRepositoryWork from '@modules/works/repositories/IRepositoryWork';
import NoContentExcepetion from '../../../../utils/Exceptions/NoContent.exception';

interface IRequest {
  repository: IRepositoryWork;
  order?: IOrderWorkDTO;
  pagination: IPaginationWorkDTO;
}

const getPagination = (
  page,
  perPage,
  totalItems,
  lengthWork,
): IPaginationReponseDTO => ({
  currentPage: Number.parseInt(`${page}`),
  totalPages: Math.ceil(totalItems / perPage),
  itemsPerPage: Number.parseInt(`${perPage}`),
  totalItems: totalItems,
  totalItemsCurrentPage: lengthWork,
});

const findAll = async ({
  repository,
  order,
  pagination,
}: IRequest): Promise<IPaginationWorkReponseDTO> => {
  const { works, totalItems } = await repository.findAll(
    {
      skip:
        pagination.page === 1 ? 0 : (pagination.page - 1) * pagination.perPage,
      take: pagination.perPage,
    },
    order,
  );

  if (totalItems <= 0) {
    throw new NoContentExcepetion();
  }
  return {
    pagination: getPagination(
      pagination.page,
      pagination.perPage,
      totalItems,
      works.length,
    ),
    works,
  };
};

export default findAll;
