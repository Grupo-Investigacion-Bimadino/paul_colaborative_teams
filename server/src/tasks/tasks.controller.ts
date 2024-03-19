import {
    Controller,
    Get,
    Post,
    Body,
    Param,
    Put,
    Delete,
    Patch,
  } from '@nestjs/common';
  import { TasksService } from './tasks.service';
  
  @Controller('taskss')
  export class TasksController {
    constructor(private readonly tasksService: TasksService) {}
    // find one by id findOne(id)
    @Get(':id')
    findOne(@Param('id') id: number): string {
      return this.tasksService.findOne(id);
    }
  
    @Get()
    findAll(): string {
      return this.tasksService.findAll();
    }
  
    @Post()
    create(@Body() createTasksDto): string {
      return this.tasksService.create(createTasksDto);
    }
  
    @Patch(':id')
    update(@Param('id') id: number, @Body() updateTasks): string {
      return this.tasksService.update(id, updateTasks);
    }
  
    @Delete(':id')
    delete(@Param('id') id: number): string {
      return this.tasksService.delete(id);
    }
  }
  