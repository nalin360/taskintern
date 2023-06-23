import { Inject, Injectable } from '@nestjs/common';
import { MongoConnectios } from 'src/t2/connection/t2.connect';
import { CreateFeedbackDto } from './feedback.dto';

@Injectable()
export class FeedbackService {
    constructor(  
        @Inject(MongoConnectios) private mongoconnect: MongoConnectios
    ) { }
    notifications(){
        return "notifications";
    }

    async getFeedbacks(){
        const users = await this.mongoconnect.connections()
        
        const getfeedback = await users.collection("feedback").find().sort({_id:-1}).limit(1).toArray()
        // console.log(getfeedback);
        
        return getfeedback;
    }
    async createFeedback(createFeedbackDto:CreateFeedbackDto){
        const users = await this.mongoconnect.connections()
        // Get the 'users' collection from the database
        const feedbackCreated = await users.collection("feedback").insertOne(createFeedbackDto)

        return feedbackCreated;
    }
}
