import { NextFunction, Request, Response } from 'express'
import { ErrorHelperType } from '../helpers/error.helper'

class ErrorMiddlewares {
  public handling(err: ErrorHelperType, _req: Request, res: Response, _next: NextFunction) {
    const name = err.name
    const message = err.message || 'Internal Server Error'
    const action = err.action || 'Unknown'
    const errorId = err.errorId || 'Unknown'
    const statusCode = err.statusCode || 500
    const errorUniqueCode = err.errorUniqueCode || 'Unknown'

    res.status(statusCode).json({
      name,
      statusCode,
      message,
      action,
      errorId,
      errorUniqueCode,
    })
  }
}

export default ErrorMiddlewares