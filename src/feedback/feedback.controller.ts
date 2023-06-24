import { Body, Controller, Get, Post, Query, Sse, UseInterceptors } from '@nestjs/common';
import { CreateFeedbackDto, CreateUserDto } from './feedback.dto';
import { FeedbackService } from './feedback.service';
import { FeedbackInterceptor } from './feedback.interceptor';
import { Observable, from, map } from 'rxjs';

@Controller('feedback')
@UseInterceptors(FeedbackInterceptor)
export class FeedbackController {

    constructor(private readonly feedbackService: FeedbackService) { }
    
    @Sse('stream')
    stream(@Query('studentId') studentId: number): Observable<{ data: any; }> {
         // Convert the result to an Observable using the from function
        //  console.log(studentId);
         
        return from(this.feedbackService.getFeedbacks(studentId)).pipe(
            map(feedback => ({
                data: feedback,
            })
            )
        )
    }

    @Post()
    async createFeedback(@Body() createFeedbackDto: CreateFeedbackDto) {
        return this.feedbackService.createFeedback(createFeedbackDto)
        // return this.feedbackService.getFeedbacks()
    }
    @Post('user')
    async createUser(@Body() createUserDto: CreateUserDto) {
        return this.feedbackService.createUser(createUserDto)
        // return this.feedbackService.getFeedbacks()
    }
}
