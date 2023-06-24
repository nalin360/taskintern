import { IsBoolean, IsEnum, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateFeedbackDto {

    @IsNotEmpty()
    @IsNumber()
    studentId:number;

    @IsNotEmpty()
    @IsString()
    createdBy:string;

    @IsNotEmpty()
    @IsString()
    createdFor:string;

    // Ensure feedbackFor is either 'teacher' or 'student'
    @IsNotEmpty()
    @IsString()
    // @IsEnum(['teacher', 'student'])
    feedbackFor: string;

    @IsNotEmpty()
    @IsString()
    feedbackMessage: string;

    @IsNotEmpty()
    feedbackDate: Date;

    @IsNotEmpty()
    @IsEnum(['gold', 'silver', 'bronze'])
    rating: string;

    @IsNotEmpty()
    @IsBoolean()
    receivedFeedback: boolean;

    @IsNotEmpty()
    @IsBoolean()
    createdFeedback:   boolean;

}


export class CreateUserDto {

    @IsNotEmpty()
    @IsString()
    username: string;

    @IsNotEmpty()
    @IsString()
    email: string;

    @IsNotEmpty()
    @IsString()
    password: string;

    @IsNotEmpty()
    @IsNumber()
    studentId: number;

    @IsNotEmpty()
    @IsString()
    @IsEnum(['teacher', 'student'])
    role: string;

    @IsNotEmpty()
    @IsString()
    createdAt: Date;
}
