import { PrismaClient } from '@prisma/client'
import { ITask } from '../interfaces/ITask'

class TaskModel {
  private prisma: PrismaClient

  constructor() {
    this.prisma = new PrismaClient()
  }

  public async create(description: string): Promise<ITask | null> {
    const data = await this.prisma.todo.create({ data: { description } })

    return data
  }

  public async findAll(): Promise<ITask[] | null> {
    const data = await this.prisma.todo.findMany()

    return data
  }

  public async findById(id: string): Promise<ITask | null> {
    const data = await this.prisma.todo.findUnique({ where: { id } })

    return data
  }

  public async updateStatusById(id: string, status: boolean): Promise<ITask | null> {
    const data = await this.prisma.todo.update({ where: { id }, data: { status } })

    return data
  }

  public async deleteById(id: string): Promise<ITask | null> {
    const data = await this.prisma.todo.delete({ where: { id } })

    return data
  }
}

export default TaskModel