import { Module } from '@nestjs/common';
import { FeedbackService } from './feedback.service';
import { FeedbackController } from './feedback.controller';
import { MongoConnectios } from 'src/t2/connection/t2.connect';

@Module({
    imports:[],
    controllers:[FeedbackController],
    providers:[FeedbackService,MongoConnectios]
})
export class FeedbackModule {}
