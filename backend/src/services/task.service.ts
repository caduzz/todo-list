import { IResponseStatus } from '../interfaces/IError'
import { ITask } from '../interfaces/ITask'
import TaskModel from '../models/task.model'

class TaskService {
  private model: TaskModel

  constructor() {
    this.model = new TaskModel()
  }

  public async create(description: string): IResponseStatus<ITask> {
    const task = await this.model.create(description)

    if (!task) {
      return { message: "An error occurred while creating your to-do item", statusCode: 400, success: false }
    }

    return { message: "Your to-do item has been successfully created!", data: task, statusCode: 201, success: true }
  }

  public async findAll(): IResponseStatus<ITask[]> {
    const task = await this.model.findAll()

    return { message: "Your to-do all list!", data: task, statusCode: 200, success: true }
  }


  public async updateStatusById(id: string, status: boolean): IResponseStatus<ITask> {
    const taskValidate = await this.model.findById(id)

    if (!taskValidate) {
      return { message: "Your to-do not found", statusCode: 404, success: false }
    }

    if (taskValidate.status === status) {
      return { message: "Your to-do not update status equal", statusCode: 400, success: false }
    }

    const task = await this.model.updateStatusById(id, status)

    return { message: "Your to-do update!", data: task, statusCode: 200, success: true }
  }

  public async delete(id: string): IResponseStatus<ITask> {
    const taskValidate = await this.model.findById(id)

    if (!taskValidate) {
      return { message: "Your to-do not found", statusCode: 404, success: false }
    }

    const task = await this.model.deleteById(id)

    return { message: "Your to-do update!", data: task, statusCode: 200, success: true }
  }

}

export default TaskService