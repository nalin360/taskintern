import { Inject, Injectable } from '@nestjs/common';
import { MongoConnectios } from 'src/t2/connection/t2.connect';
import { CreateFeedbackDto } from './feedback.dto';

@Injectable()
export class FeedbackService {
    constructor(
        @Inject(MongoConnectios) private mongoconnect: MongoConnectios
    ) { }
    notifications() {
        return "notifications";
    }

    async getFeedbacks(studentId: number) {
        const users = await this.mongoconnect.connections()
        // const getfeedback = await users.collection("feedback").find().sort({_id:-1}).limit(1).toArray()
        // Collection.find(query, projection);
        // query - query for filtering out the data
        // projection - Specifies the fields to return in the documents that match the query filter
        console.log(studentId);

        const pipeline = [
            {
                $match: { studentId: studentId }
            },
            {
                $lookup: {
                    // studentId`, which exists in the current collection
                    from: 'feedbacks', localField: 'studentId',
                    // foreign field is also `studentId`, which exists in the `feedbacks` collection.
                    foreignField: 'studentId', as: 'feedbacks'
                }
            },
            {
                $project: {
                    _id: 0,
                    studentId: '$feedbacks.studentId',
                    createdFor: '$feedbacks.createdFor',
                    feedbackMessage: '$feedbacks.feedbackMessage'
                }
            }

        ];

        const getfeedback = await users
            .collection('users').aggregate(pipeline).toArray();

        console.log(getfeedback);
        return getfeedback;
    }
    async createFeedback(createFeedbackDto: CreateFeedbackDto) {
        const users = await this.mongoconnect.connections()
        // Get the 'users' collection from the database
        const feedbackCreated = await users.collection("feedback").insertOne(createFeedbackDto)
        return feedbackCreated;
    }

    async createUser(createUserkDto: any) {
        const users = await this.mongoconnect.connections()
        // Get the 'users' collection from the database
        const feedbackCreated = await users.collection("feedback").insertOne(createUserkDto)
        return feedbackCreated;
    }
}
