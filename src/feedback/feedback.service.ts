import { Inject, Injectable } from '@nestjs/common';
import { MongoConnectios } from 'src/t2/connection/t2.connect';
import { CreateFeedbackDto } from './feedback.dto';
import { NotificationController } from 'src/notification/notification.controller';

@Injectable()
export class FeedbackService {
    constructor(
        @Inject(MongoConnectios) private mongoconnect: MongoConnectios,
        private notificationController: NotificationController
    ) { }

    async createFeedback(createFeedbackDto: CreateFeedbackDto) {
        const users = await this.mongoconnect.connections()
        // Get the 'users' collection from the database
        const feedbackCreated = await users.collection("feedback").insertOne(createFeedbackDto)
        
        const insertedDocument = await users.collection("feedback")
            .findOne({ _id: feedbackCreated.insertedId });
        // Retrieve the studentId from the inserted document
        const studentId = insertedDocument.studentId;

        const notification = this.notificationController.stream(studentId)
        // return notification;
        return notification
    }

    async createUser(createUserkDto: any) {
        const users = await this.mongoconnect.connections()
        // Get the 'users' collection from the database
        const feedbackCreated = await users.collection("users").insertOne(createUserkDto)
        return feedbackCreated;
    }
    async findFeedback():Promise<object>{
        const users = await this.mongoconnect.connections()
        // Get the 'users' collection from the database
        const findId = await users.collection("feedback").find().toArray()
        // console.log(findId);
        // console.log("findFeedback ..........................");
        
        return findId;
    }
}
