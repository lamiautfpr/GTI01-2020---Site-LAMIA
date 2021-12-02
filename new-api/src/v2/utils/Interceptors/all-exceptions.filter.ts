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
import TypeOrmError from '../Errors/HandleErrorORM/TypeOrmError.strategy';
import { CustomHttpExceptionResponse } from './models/http-exception-response.interface';

interface IGetErrorResponse {
  status: HttpStatus;
  errorMessage: string;
  errors?: string[];
  request: Request;
}

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    const propsGetErrorResponse: IGetErrorResponse = {
      request,
    } as IGetErrorResponse;

    const handleOrmError = new HandleOrmError(new TypeOrmError());

    if (exception instanceof HttpException) {
      propsGetErrorResponse.status = exception.getStatus();
      const errorResponse = exception.getResponse();
      propsGetErrorResponse.errorMessage =
        (errorResponse as any).error || exception.message;
      propsGetErrorResponse.errors = (errorResponse as any).message;
    } else if (handleOrmError.isError(exception)) {
      const errorResponse = handleOrmError.getErrorResponse(exception);
      propsGetErrorResponse.status = errorResponse.statusCode;
      propsGetErrorResponse.errorMessage = errorResponse.errorMessage;
      propsGetErrorResponse.errors = errorResponse.errors;
    } else {
      propsGetErrorResponse.status = HttpStatus.INTERNAL_SERVER_ERROR;
      propsGetErrorResponse.errorMessage = 'INTERNAL_SERVER_ERROR';
      propsGetErrorResponse.errors = [
        'Critical internal server error occurred!',
      ];
    }

    const errorResponse = this.getErrorResponse(propsGetErrorResponse);
    const errorLog = this.getErrorLog(errorResponse, request, exception);
    this.writeErrorLogToFile(errorLog);
    response.status(propsGetErrorResponse.status).json(errorResponse);
  }

  private getErrorResponse = ({
    status,
    errorMessage,
    request,
    errors,
  }: IGetErrorResponse): CustomHttpExceptionResponse => ({
    timeStamp: new Date(),
    path: request.url,
    statusCode: status,
    errorMessage: errorMessage.toUpperCase(),
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
