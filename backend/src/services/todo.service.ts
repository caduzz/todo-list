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

}

export default TodoService