import { Request, Response } from "express"

import TaskService from "../services/task.service"

class TaskController {
  private service: TaskService

  constructor() {
    this.service = new TaskService()
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
    const { task_id } = req.params
    const { status }: { status: boolean } = req.body

    const { statusCode, message, data } = await this.service.updateStatusById(task_id, status)

    res.status(statusCode).json({ message, statusCode, data })
  }
  public async deleteById(req: Request, res: Response) {
    const { task_id } = req.params

    const { statusCode, message, data } = await this.service.delete(task_id)

    res.status(statusCode).json({ message, statusCode, data })
  }
}

export default TaskController