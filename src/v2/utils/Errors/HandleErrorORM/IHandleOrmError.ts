import { HttpExceptionResponse } from 'v2/utils/Interceptors/models/http-exception-response.interface';

export default interface IHandleOrmError {
  isError(exception: unknown): boolean;
  handleError(expection: unknown): HttpExceptionResponse;
}
