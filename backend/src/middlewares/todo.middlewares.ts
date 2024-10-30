import * as Joi from "joi"

import { NextFunction, Request, Response } from "express"


import { BadRequestError } from "../helpers/error.helper"
import { ITodo } from "../interfaces/ITodo";

class TodoMiddlewares {
  public create(req: Request, _res: Response, next: NextFunction) {
    const { ...body } = req.body

    const schema = Joi.object<ITodo>({
      description: Joi.string().required(),
    });

    const { error } = schema.validate(body)

    if (error)
      throw new BadRequestError(error.message)

    next()
  }

  public update(req: Request, _res: Response, next: NextFunction) {
    const { todo_id: id } = req.params
    const { ...body } = req.body

    const schema = Joi.object<ITodo>({
      id: Joi.string().required(),
      status: Joi.boolean().required(),
    });

    const { error } = schema.validate({ body, id })

    if (error)
      throw new BadRequestError(error.message)

    next()
  }

  public delete(req: Request, _res: Response, next: NextFunction) {
    const { todo_id: id } = req.params


    const schema = Joi.object<ITodo>({
      id: Joi.string().required(),
    });

    const { error } = schema.validate(id)

    if (error)
      throw new BadRequestError(error.message)

    next()
  }
}

export default TodoMiddlewares