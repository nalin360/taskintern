import { Module } from '@nestjs/common';
import { FeedbackService } from './feedback.service';
import { FeedbackController } from './feedback.controller';
import { MongoConnectios } from 'src/t2/connection/t2.connect';
import { NotificationController } from 'src/notification/notification.controller';
import { NotificationModule } from '../notification/notification.module';
import { NotificationService } from '../notification/notification.service';

@Module({
    imports:[],
    controllers:[FeedbackController],
    providers:[FeedbackService,MongoConnectios,NotificationController,NotificationService]
})
export class FeedbackModule {}
