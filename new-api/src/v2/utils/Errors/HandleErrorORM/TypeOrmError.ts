import { HttpExceptionResponse } from 'v2/utils/Interceptors/models/http-exception-response.interface';
import IHandleOrmError from './IHandleOrmError';

export default class TypeOrmError implements IHandleOrmError {
  private errors = ['QueryFailedError'];

  private error = {
    23503: (detail: string) => {
      const className = detail.split('tb_')[1].replace('".', '');
      const item = detail.split('=(')[1].split(')')[0];

      return {
        error: `Not Found "${className}" with idddd: "${item}"`,
        statusCode: 404,
      };
    },
  };

  isError(exception: unknown): boolean {
    return this.errors.includes(exception.constructor.name);
  }

  handleError(exception: any): HttpExceptionResponse {
    if (Object.keys(this.error).includes(exception.code)) {
      return this.error[exception.code](exception.detail);
    }
    return {
      error: `${exception}`,
      statusCode: 500,
    };
  }
}
