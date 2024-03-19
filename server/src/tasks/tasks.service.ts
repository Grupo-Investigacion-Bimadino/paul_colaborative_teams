import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {
  private tasks: any[] = [];

  findOne(id: number): string {
    return `Get tasks with id ${id}`;
  }

  findAll(): string {
    return 'Get all tasks';
  }

  create(createTasksDto): string {
    this.tasks.push(createTasksDto);
    return 'Tasks created successfully';
  }

  update(id, updateTasks): string {
    return 'Tasks updated successfully';
  }

  delete(id): string {
    return 'Tasks deleted successfully';
  }
}
