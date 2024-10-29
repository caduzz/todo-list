import { PrismaClient } from '@prisma/client'
import { ITodo } from '../interfaces/ITodo'

class TodoModel {
  private prisma: PrismaClient

  constructor() {
    this.prisma = new PrismaClient()
  }

  public async create(description: string): Promise<ITodo | null> {
    const data = await this.prisma.todo.create({ data: { description } })

    return data
  }

  public async findAll(): Promise<ITodo[] | null> {
    const data = await this.prisma.todo.findMany()

    return data
  }
}

export default TodoModel