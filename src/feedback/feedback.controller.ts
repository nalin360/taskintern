import { Body, Controller, Get, Post, Sse, UseInterceptors } from '@nestjs/common';
import { CreateFeedbackDto } from './feedback.dto';
import { FeedbackService } from './feedback.service';
import { FeedbackInterceptor } from './feedback.interceptor';
import { Observable, from, map } from 'rxjs';

@Controller('feedback')
@UseInterceptors(FeedbackInterceptor)
export class FeedbackController {

    constructor(private readonly feedbackService: FeedbackService) { }
    
    @Sse('stream')
    stream(): Observable<{ data: any; }> {
         // Convert the result to an Observable using the from function
        return from(this.feedbackService.getFeedbacks()).pipe(
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
}
