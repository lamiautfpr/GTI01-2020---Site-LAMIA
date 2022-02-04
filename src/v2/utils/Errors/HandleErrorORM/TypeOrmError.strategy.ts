import { HttpStatus } from '@nestjs/common';
import { HttpExceptionResponse } from 'v2/utils/Interceptors/models/http-exception-response.interface';
import IHandleOrmError from './IHandleOrmError';

interface IError {
  [key: number]: (detail: string) => HttpExceptionResponse;
}

export default class TypeOrmError implements IHandleOrmError {
  private errors = ['QueryFailedError'];

  // Documentation: https://www.postgresql.org/docs/10/errcodes-appendix.html POSTGRESQL ERROR CODES
  private error: IError = {
    23503: (detail: string) => {
      const className = detail.split('tb_')[1].replace('".', '');
      const item = detail.split('=(')[1].split(')')[0];

      return {
        errorMessage: `NOT_FOUND`,
        errors: [`"Not found ${className}" with id: "${item}".`],
        statusCode: HttpStatus.NOT_FOUND,
      };
    },
    23505: (detail: string) => {
      const key = detail.replace(/\"/g, '').split('(')[1].split(')')[0];
      return {
        errorMessage: 'CONFLICT',
        errors: [`"${key}" already exists.`],
        statusCode: HttpStatus.CONFLICT,
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
      errorMessage: 'INTERNAL_SERVER_ERROR',
      statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
      errors: [`${exception}`],
    };
  }
}
