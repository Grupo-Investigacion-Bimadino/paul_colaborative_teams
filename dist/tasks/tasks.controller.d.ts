import { TasksService } from './tasks.service';
import { Task } from './schemas/tasks.schema';
export declare class TasksController {
    private readonly tasksService;
    constructor(tasksService: TasksService);
    findOne(id: string): Promise<Task | null>;
    findAll(): Promise<Task[]>;
    create(createTasksDto: Task): Promise<Task>;
    update(id: string, updateTasksDto: Task): Promise<Task | null>;
    delete(id: string): Promise<Task | null>;
}
