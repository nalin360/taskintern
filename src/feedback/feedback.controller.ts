import { Body, Controller, Get, Post, Query, Sse, UseInterceptors } from '@nestjs/common';
import { CreateFeedbackDto, CreateUserDto } from './feedback.dto';
import { FeedbackService } from './feedback.service';
import { Observable, from, map } from 'rxjs';
import { ResponseInterceptor } from './response.interceptor';

@Controller('feedback')
// @UseInterceptors(ResponseInterceptor)
export class FeedbackController {

    constructor(private readonly feedbackService: FeedbackService) { }



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


    @Get()
    async findFeedBAck() {
        return this.feedbackService.findFeedback()
    }

}
