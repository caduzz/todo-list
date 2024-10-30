import { PrismaClient } from '@prisma/client'
import { ITask } from '../interfaces/ITask'

class TaskModel {
  private prisma: PrismaClient

  constructor() {
    this.prisma = new PrismaClient()
  }

  public async create(description: string): Promise<ITask | null> {
    const data = await this.prisma.task.create({ data: { description } })

    return data
  }

  public async findAll(): Promise<ITask[] | null> {
    const data = await this.prisma.task.findMany()

    return data
  }

  public async findById(id: string): Promise<ITask | null> {
    const data = await this.prisma.task.findUnique({ where: { id } })

    return data
  }

  public async updateStatusById(id: string, status: boolean): Promise<ITask | null> {
    const data = await this.prisma.task.update({ where: { id }, data: { status } })

    return data
  }

  public async deleteById(id: string): Promise<ITask | null> {
    const data = await this.prisma.task.delete({ where: { id } })

    return data
  }
}

export default TaskModel