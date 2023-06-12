import {
    IsNotEmpty, IsOptional,
    IsBoolean ,IsString
} from 'class-validator';

export class CreateTaskDto {
  
    @IsString()
    name: string;
 
    @IsString()
    description: string;
  
    @IsString()
    dueDate: string;
  
    @IsBoolean()
    completed: boolean
}

export class TaskUpdatesDto {
    @IsOptional()
    @IsBoolean()
    completed?: boolean;
}

export class UpdateTaskDto {
    @IsString()
    name: string;
    
    @IsString()
    description: string;
    
    @IsString()
    dueDate: string;

    @IsOptional()
    @IsBoolean()
    completed?: boolean;
}

export class DeleteTaskDto {
    @IsString()
    name: string;
}