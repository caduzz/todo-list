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

  public async findAll(_req: Request, res: Response) {
    const { statusCode, message, data } = await this.service.findAll()

    res.status(statusCode).json({ message, statusCode, data })
  }

  public async updateStatusById(req: Request, res: Response) {
    const { todo_id } = req.params
    const { status }: { status: boolean } = req.body

    const { statusCode, message, data } = await this.service.updateStatusById(todo_id, status)

    res.status(statusCode).json({ message, statusCode, data })
  }
  public async deleteById(req: Request, res: Response) {
    const { todo_id } = req.params

    const { statusCode, message, data } = await this.service.delete(todo_id)

    res.status(statusCode).json({ message, statusCode, data })
  }
}

export default TodoController