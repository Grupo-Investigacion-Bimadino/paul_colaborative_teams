import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module'; // Agrega esta línea
import { NotesModule } from './notes/notes.module';
import { NotificationsModule } from './notifications/notifications.module';
import { TeamModule } from './team/team.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [TasksModule, NotesModule, NotificationsModule, TeamModule, UsersModule], // Agrega TasksModule aquí
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
