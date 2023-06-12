import { Controller, Body, Post, Get, Patch, Delete, Param } from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto, UpdateTaskDto, DeleteTaskDto } from './dto/task.dto';

@Controller('task')
export class TaskController {
    // injecting instance of TaskService into Controller
    constructor(private readonly taskService: TaskService) { }

    @Get()
    getAllTask() {
        return this.taskService.findAll()
    }

    @Post()
    setTask(@Body() setTaskDto: CreateTaskDto) {
        return this.taskService.createTask(setTaskDto);
    }

    @Patch(':name')
    updateTask(@Param('name') name: string, @Body() updateTaskDto: UpdateTaskDto) {
        return this.taskService.updateTask(name, updateTaskDto);
    }

    @Delete(':name')
    async deleteTask(@Param() deleteTaskDto: DeleteTaskDto) {
        return this.taskService.delete(deleteTaskDto.name);
    }
}
