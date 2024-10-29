import { Request, Response } from "express"

import TodoService from "../services/todo.service"

class TodoController {
  private service: TodoService

  constructor() {
    this.service = new TodoService()
  }

  public async create(req: Request, res: Response) {
    const { description }: { description: string } = req.body

    const { statusCode, message, data } = await this.service.create(description)

    res.status(statusCode).json({ message, statusCode, data })
  }
}

export default TodoController