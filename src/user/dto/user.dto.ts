import { IsInt, IsString } from 'class-validator';

export class UserDto {
    @IsInt()
    userId: number;

    @IsString()
    username: string;

    @IsString()
    password: string;

    @IsString()
    role: string;
}

export class CheckUserDto {
   
    @IsString()
    username: string;

   
}

