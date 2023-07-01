import { Inject, Injectable } from '@nestjs/common';
import { MongoConnectios } from 'src/t2/connection/t2.connect';

@Injectable()
export class NotificationService {

    constructor(
        @Inject(MongoConnectios) private mongoconnect: MongoConnectios
    ) { }

    async getFeedbacks(studentId: number) {
        const users = await this.mongoconnect.connections()
        const getfeedback = await users.collection("feedback").find({studentId: studentId}
            // , 
            // { 
            //     projection: { studentId: studentId } 
            // }
            ).toArray()
        // Collection.find(query, projection);
        // query - query for filtering out the data
        // projection - Specifies the fields to return in the documents that match the query filter
        console.log(studentId);

        // const pipeline = [
        //     {
        //         $match: { studentId: studentId }
        //     },
        //     {
        //         $lookup: {
        //             // studentId`, which exists in the current collection
        //             from: 'feedbacks', localField: 'studentId',
        //             // foreign field is also `studentId`, which exists in the `feedbacks` collection.
        //             foreignField: 'studentId', as: 'feedbacks'
        //         }
        //     },
        //     {
        //         $project: {
        //             _id: 0,
        //             studentId: '$feedbacks.studentId',
        //             createdFor: '$feedbacks.createdFor',
        //             feedbackMessage: '$feedbacks.feedbackMessage'
        //         }
        //     }

        // ];

        // const getfeedback = await users
        //     .collection('users').aggregate(pipeline).toArray();

        // console.log(getfeedback);
        return getfeedback;
    }
}
