import { IResponseStatus } from '../interfaces/IError'
import { ITodo } from '../interfaces/ITodo'
import TodoModel from '../models/todo.model'

class TodoService {
  private model: TodoModel

  constructor() {
    this.model = new TodoModel()
  }

  public async create(description: string): IResponseStatus<ITodo> {
    const todo = await this.model.create(description)

    if (!todo) {
      return { message: "An error occurred while creating your to-do item", statusCode: 400, success: false }
    }

    return { message: "Your to-do item has been successfully created!", data: todo, statusCode: 201, success: true }
  }

  public async findAll(): IResponseStatus<ITodo[]> {
    const todo = await this.model.findAll()

    return { message: "Your to-do all list!", data: todo, statusCode: 200, success: true }
  }


  public async updateStatusById(id: string, status: boolean): IResponseStatus<ITodo> {
    const todoValidate = await this.model.findById(id)

    if (!todoValidate) {
      return { message: "Your to-do not found", statusCode: 404, success: false }
    }

    const todo = await this.model.updateStatusById(id, status)

    return { message: "Your to-do update!", data: todo, statusCode: 200, success: true }
  }

  public async delete(id: string): IResponseStatus<ITodo> {
    const todoValidate = await this.model.findById(id)

    if (!todoValidate) {
      return { message: "Your to-do not found", statusCode: 404, success: false }
    }

    const todo = await this.model.deleteById(id)

    return { message: "Your to-do update!", data: todo, statusCode: 200, success: true }
  }

}

export default TodoService