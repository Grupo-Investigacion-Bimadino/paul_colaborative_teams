import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module'; // Agrega esta línea
import { NotesModule } from './notes/notes.module';
import { NotificationsModule } from './notifications/notifications.module';
import { TeamModule } from './team/team.module';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    TasksModule,
    NotesModule,
    NotificationsModule,
    TeamModule,
    UsersModule,
    MongooseModule.forRoot('') // Agrega la cadena de conexión de MongoDB aquí (p. ej., 'mongodb://localhost/nest'
  ], // Agrega TasksModule aquí
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
