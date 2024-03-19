import { Injectable } from '@nestjs/common';

@Injectable()
export class NotificationsService {
  private notifications: any[] = [];

  findOne(id: number): string {
    return `Get notifications with id ${id}`;
  }

  findAll(): string {
    return 'Get all notificationss';
  }

  create(createNotificationsDto): string {
    this.notifications.push(createNotificationsDto);
    return 'notifications created successfully';
  }

  update(id, updateNotifications): string {
    return 'notifications updated successfully';
  }

  delete(id): string {
    return 'notifications deleted successfully';
  }
}
