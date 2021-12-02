import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Request, Response } from 'express';
import * as fs from 'fs';
import HandleOrmError from '../Errors/HandleErrorORM/HandleOrmError';
import TypeOrmError from '../Errors/HandleErrorORM/TypeOrmError';
import { CustomHttpExceptionResponse } from './models/http-exception-response.interface';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    let status: HttpStatus;
    let errorMessage: string;
    let errors: string | string[] | undefined;

    const handleOrmError = new HandleOrmError(new TypeOrmError());

    if (exception instanceof HttpException) {
      status = exception.getStatus();
      const errorResponse = exception.getResponse();
      errorMessage = (errorResponse as any).error || exception.message;
      errors = (errorResponse as any).message;
    } else if (handleOrmError.isError(exception)) {
      const errorResponse = handleOrmError.getErrorResponse(exception);
      status = errorResponse.statusCode;
      errorMessage = errorResponse.errorMessage;
    } else {
      status = HttpStatus.INTERNAL_SERVER_ERROR;
      errorMessage = 'Critical internal server error occurred!';
    }

    const errorResponse = this.getErrorResponse(
      status,
      errorMessage,
      request,
      errors,
    );
    const errorLog = this.getErrorLog(errorResponse, request, exception);
    this.writeErrorLogToFile(errorLog);
    response.status(status).json(errorResponse);
  }

  private getErrorResponse = (
    status: HttpStatus,
    errorMessage: string,
    request: Request,
    errors?: string | string[],
  ): CustomHttpExceptionResponse => ({
    timeStamp: new Date(),
    path: request.url,
    statusCode: status,
    errorMessage,
    method: request.method,
    errors: errors,
  });

  private getErrorLog = (
    errorResponse: CustomHttpExceptionResponse,
    request: Request,
    exception: unknown,
  ): string => {
    const { statusCode, errorMessage } = errorResponse;
    const { method, url } = request;
    const errorLog = `Response Code: ${statusCode} - Method: ${method} - URL: ${url}\n\n
    ${JSON.stringify(errorResponse)}\n\n
    User: ${JSON.stringify(request.user ?? 'Not signed in')}\n\n
    ${exception instanceof HttpException ? exception.stack : errorMessage}\n\n`;
    return errorLog;
  };

  private writeErrorLogToFile = (errorLog: string): void => {
    fs.appendFile('error.log', errorLog, 'utf8', (err) => {
      if (err) throw err;
    });
  };
}
