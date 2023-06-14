import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaskController } from './task/task.controller';
import { TaskModule } from './task/task.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { UserModule } from './user/user.module';
import { TaskService } from './task/task.service';
import { T1Controller } from './t1/t1.controller';
import { T1Service } from './t1/t1.service';
import { T2Controller } from './t2/t2.controller';
import { T2Module } from './t2/t2.module';


@Module({
  imports: [TaskModule , 
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/task'), 
    UserModule,T2Module],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
