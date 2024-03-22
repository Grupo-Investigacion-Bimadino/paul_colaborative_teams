import { TasksService } from './tasks.service';
export declare class TasksController {
    private readonly tasksService;
    constructor(tasksService: TasksService);
    findOne(id: number): string;
    findAll(): string;
    create(createTasksDto: any): string;
    update(id: number, updateTasks: any): string;
    delete(id: number): string;
}
