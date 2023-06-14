import { IsNotEmpty, IsString } from "class-validator";


export class MyUsers{
    @IsNotEmpty()
    @IsString()
    email:String;

    @IsNotEmpty()
    @IsString()
    password:String
}