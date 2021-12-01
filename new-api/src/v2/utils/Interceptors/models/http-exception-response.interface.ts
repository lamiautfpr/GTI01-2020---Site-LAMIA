export interface HttpExceptionResponse {
  statusCode: number;
  error: string | string[];
}

export interface CustomHttpExceptionResponse extends HttpExceptionResponse {
  path: string;
  method: string;
  timeStamp: Date;
}
