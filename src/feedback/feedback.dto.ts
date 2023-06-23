import {IsEnum, IsNotEmpty, IsString } from 'class-validator';

export class CreateFeedbackDto {

    // Ensure feedbackFor is either 'teacher' or 'student'
    @IsNotEmpty()
    @IsString()
    @IsEnum(['teacher', 'student'])
    feedbackFor: string;

    @IsNotEmpty()
    @IsString()
    feedbackMessage: string;
    
    @IsNotEmpty()
    feedbackDate: Date;
    
    @IsNotEmpty()
    @IsEnum(['gold', 'silver', 'bronze'])
    rating: string;
}

// export class GetFeedbackDto {
//   feedbackFor: string;
//   rating: string;
// }
