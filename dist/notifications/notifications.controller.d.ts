import { NotificationsService } from './notifications.service';
import { Notification } from './schemas/notifications.schema';
export declare class NotificationsController {
    private readonly notificationService;
    constructor(notificationService: NotificationsService);
    findOne(id: string): Promise<Notification>;
    findAll(): Promise<Notification[]>;
    create(createNotificationDto: Notification): Promise<Notification>;
    update(id: string, updateNotification: Notification): Promise<Notification>;
    delete(id: string): Promise<Notification>;
}
