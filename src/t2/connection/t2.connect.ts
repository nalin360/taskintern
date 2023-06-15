import { Injectable } from '@nestjs/common';
import { MongoClient, Db } from 'mongodb';

@Injectable()
export class MongoConnectios{

    async connections(): Promise<Db> {
        // Connect to the MongoDB instance at mongodb://127.0.0.1:27017/
        try {
            const client = await MongoClient.connect('mongodb://127.0.0.1:27017/');
        // Send a ping to confirm a successful connection
        if (client.db("work").command({ ping: 1 })) {
            console.log("Pinged your deployment. You successfully connected to MongoDB!")

            return client.db('work')
        }
        } catch (error) {
            console.error("Error connection "+error);
            ;
            
        }
    }
        
}