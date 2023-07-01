import { Module } from '@nestjs/common';
import { NotificationController } from './notification.controller';
import { NotificationService } from './notification.service';
import { MongoConnectios } from '../t2/connection/t2.connect';

@Module({
    imports:[],
    controllers:[NotificationController],
    providers:[NotificationService,MongoConnectios],
    // exports:[NotificationController]

})
export class NotificationModule {}
