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
  }

}

export default TodoService