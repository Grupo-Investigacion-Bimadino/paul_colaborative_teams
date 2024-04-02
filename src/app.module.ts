import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module'; // Agrega esta línea
import { NotesModule } from './notes/notes.module';
import { NotificationsModule } from './notifications/notifications.module';
import { TeamModule } from './team/team.module';

@Module({
  imports: [TasksModule, NotesModule, NotificationsModule, TeamModule], // Agrega TasksModule aquí
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
