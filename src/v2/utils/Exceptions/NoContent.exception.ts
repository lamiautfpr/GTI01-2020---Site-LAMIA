import { HttpException, HttpStatus } from '@nestjs/common';

export default class NoContentException extends HttpException {
  constructor() {
    super('No Content', HttpStatus.NO_CONTENT);
  }
}
