import {
    IsNotEmpty, IsOptional,
    IsBoolean ,IsString
} from 'class-validator';

export class CreateTaskDto {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsString()
    description: string;
  
    @IsNotEmpty()
    @IsString()
    dueDate: string;
    
    @IsNotEmpty()
    @IsBoolean()
    completed: boolean
}

export class TaskUpdatesDto {
    @IsNotEmpty()
    @IsOptional()
    @IsBoolean()
    completed?: boolean;
}

export class UpdateTaskDto {
    
    @IsNotEmpty()
    @IsString()
    name: string;
    
    @IsNotEmpty()
    @IsString()
    description: string;
    
    @IsNotEmpty()
    @IsString()
    dueDate: string;
    @IsNotEmpty()

    @IsOptional()
    @IsBoolean()
    completed?: boolean;
}

export class DeleteTaskDto {
    @IsNotEmpty()
    @IsString()
    name: string;
}