export type ErrorHelperType = Error & Partial<ErrorHelper>

class ErrorHelper extends Error {
  public readonly statusCode?: number;
  public errorId: string;
  public errorUniqueCode: string;
  public action: string;

  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;

    this.name = 'DefaultError';
    this.action = 'Unknown';
    this.errorId = 'Unknown';
    this.errorUniqueCode = 'Unknown';

    Object.setPrototypeOf(this, new.target.prototype);
  }
}

export class BadRequestError extends ErrorHelper {
  constructor(message: string) {
    super(message, 400);
    this.name = 'BadRequest';
    this.action = 'Fetching data';
    this.errorId = 'ERR001';
    this.errorUniqueCode = 'BAD:REQUEST:400';
  }
}