import { HttpExceptionResponse } from 'v2/utils/Interceptors/models/http-exception-response.interface';
import IHandleOrmError from './IHandleOrmError';

export default class TypeOrmError implements IHandleOrmError {
  private errors = ['QueryFailedError'];

  // Documentation: https://www.postgresql.org/docs/10/errcodes-appendix.html POSTGRESQL ERROR CODES
  private error = {
    23503: (detail: string) => {
      const className = detail.split('tb_')[1].replace('".', '');
      const item = detail.split('=(')[1].split(')')[0];

      return {
        error: `NOT_FOUND "${className}" with id: "${item}".`,
        statusCode: 404,
      };
    },
    23505: (detail: string) => {
      const key = detail.replace(/\"/g, '').split('(')[1].split(')')[0];
      return {
        error: `CONFLICT "${key}" already exists.`,
        statusCode: 409,
      };
    },
  };

  isError(exception: unknown): boolean {
    return this.errors.includes(exception.constructor.name);
  }

  handleError(exception: any): HttpExceptionResponse {
    console.log(exception);
    if (Object.keys(this.error).includes(exception.code)) {
      return this.error[exception.code](exception.detail);
    }
    return {
      error: `${exception}`,
      statusCode: 500,
    };
  }
}
