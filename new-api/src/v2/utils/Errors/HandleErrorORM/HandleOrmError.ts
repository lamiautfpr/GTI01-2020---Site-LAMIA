import { HttpExceptionResponse } from 'v2/utils/Interceptors/models/http-exception-response.interface';
import IHandleOrmError from './IHandleOrmError';

export default class HandleOrmError {
  private handle: IHandleOrmError;

  constructor(handle: IHandleOrmError) {
    this.handle = handle;
  }

  isError(exception: unknown): boolean {
    return this.handle.isError(exception);
  }

  getErrorResponse(exception: unknown): HttpExceptionResponse {
    return this.handle.handleError(exception);
  }
}
