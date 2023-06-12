import { Module } from '@nestjs/common';
import { TaskService } from './task.service';
import { MongooseModule } from '@nestjs/mongoose';
import { TaskSchema } from 'src/Schema/task.schema';
import { TaskController } from './task.controller';

@Module({
  imports :[ MongooseModule.forFeature([{ name: 'Task', schema: TaskSchema }])],
  controllers:[TaskController],
  providers: [TaskService],
  exports: [TaskService],
})
export class TaskModule {}
