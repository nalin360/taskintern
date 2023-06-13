import { IsInt, IsString, IsBoolean, IsNotEmpty, IsObject, IsEmail } from 'class-validator';

export class UserDto {
    @IsInt()
    userId: number;

    // @IsEmail()
    username: string;

    @IsString()
    password: string;

    @IsString()
    role: string;
}

export class CheckUserDto {
    @IsNotEmpty()
    // @IsEmail()
    username: string;

}


export class IsUserDto {

    @IsNotEmpty()
    @IsBoolean()
    success: Boolean;

    @IsNotEmpty()
    @IsObject()
    user: Object;
}

export class IsUserFail {
    @IsNotEmpty()
    @IsBoolean()
    success: Boolean;
}

