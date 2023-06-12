import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaskController } from './task/task.controller';
import { TaskModule } from './task/task.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { UserModule } from './user/user.module';


@Module({
  imports: [TaskModule , MongooseModule.forRoot('mongodb://127.0.0.1:27017/task'), UserModule],
  controllers: [AppController, TaskController, UserController],
  providers: [AppService, UserService],
})
export class AppModule {}
