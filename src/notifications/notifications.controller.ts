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
  import { NotificationsService } from './notifications.service';
  
  @Controller('notificationss')
  export class NotificationsController {
    constructor(private readonly notificationsService: NotificationsService) {}
    // find one by id findOne(id)
    @Get(':id')
    findOne(@Param('id') id: number): string {
      return this.notificationsService.findOne(id);
    }
  
    @Get()
    findAll(): string {
      return this.notificationsService.findAll();
    }
  
    @Post()
    create(@Body() createNotificationsDto): string {
      return this.notificationsService.create(createNotificationsDto);
    }
  
    @Patch(':id')
    update(@Param('id') id: number, @Body() updateNotifications): string {
      return this.notificationsService.update(id, updateNotifications);
    }
  
    @Delete(':id')
    delete(@Param('id') id: number): string {
      return this.notificationsService.delete(id);
    }
  }
  