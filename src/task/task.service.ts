import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TaskUpdatesDto , CreateTaskDto, UpdateTaskDto } from './dto/task.dto';


@Injectable()
export class TaskService {
    //  injecting Task model into  constructor
    constructor(@InjectModel('Task') private taskModel: Model<CreateTaskDto>) {}

    async findAll(): Promise<CreateTaskDto[]> {
        // find() method retrieves all documents from the database
        return this.taskModel.find();
      }

    async createTask(task : CreateTaskDto): Promise<CreateTaskDto>{
        const taskCreated = new this.taskModel(task);
        return taskCreated.save();
    }

    async updateTask(name:string , updatetask: UpdateTaskDto) {
        // findOneAndUpdate(filter, update); 
        // {new: true } return the document after update was applied
        return this.taskModel.findOneAndUpdate({name} ,updatetask,{ new: true })
    }

    async delete(name: string): Promise<CreateTaskDto> {
        // findOneAndDelete(filter, update); 
        return this.taskModel.findOneAndDelete({ name });
      }

}
