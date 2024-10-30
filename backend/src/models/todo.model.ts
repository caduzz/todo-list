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

  public async findById(id: string): Promise<ITodo | null> {
    const data = await this.prisma.todo.findUnique({ where: { id } })

    return data
  }

  public async updateStatusById(id: string, status: boolean): Promise<ITodo | null> {
    const data = await this.prisma.todo.update({ where: { id }, data: { status } })

    return data
  }

  public async delete(id: string): Promise<ITodo | null> {
    const data = await this.prisma.todo.delete({ where: { id } })

    return data
  }
}

export default TodoModel