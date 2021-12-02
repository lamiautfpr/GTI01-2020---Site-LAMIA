export interface HttpExceptionResponse {
  statusCode: number;
  errorMessage: string;
  errors: string | string[] | undefined;
}

export interface CustomHttpExceptionResponse extends HttpExceptionResponse {
  path: string;
  method: string;
  timeStamp: Date;
}
