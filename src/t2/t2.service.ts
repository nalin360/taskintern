import { Injectable, UnauthorizedException, Inject } from '@nestjs/common';
import { MongoClient, Db } from 'mongodb';
import { JwtService } from '@nestjs/jwt';
import { MyUsers } from './dto/t2.dto';
// import { MongoConnectios } from './connection/t2.connect';


@Injectable()
export class T2Service {
    constructor(
        @Inject(JwtService) private jwtService: JwtService
    ) { }


    async connections(query, userdto: MyUsers): Promise<any> {
        // Connect to the MongoDB instance at mongodb://127.0.0.1:27017/
        const client = await MongoClient.connect('mongodb://127.0.0.1:27017/');
        // Send a ping to confirm a successful connection
        if (client.db("work").command({ ping: 1 })) {
            console.log("Pinged your deployment. You successfully connected to MongoDB!")

            const users = client.db('work')

            // Get the 'users' collection from the database
            // Find the single user with the matching email
            const getusers = await users.collection("users").findOne(query);

            // console.log(getusers);
            if (getusers.password !== userdto.password) {
                throw new UnauthorizedException();
            }
            const payload = { sub: getusers.userId, username: getusers.username };
            return {
                // Generate a signed JWT token using the payload
                access_token: await this.jwtService.signAsync(payload),
            };


        } else {
            throw new Error('Failed to connect to MongoDB');
        }


    }
}
