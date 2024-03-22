import { NotificationsService } from './notifications.service';
export declare class NotificationsController {
    private readonly notificationsService;
    constructor(notificationsService: NotificationsService);
    findOne(id: number): string;
    findAll(): string;
    create(createNotificationsDto: any): string;
    update(id: number, updateNotifications: any): string;
    delete(id: number): string;
}
