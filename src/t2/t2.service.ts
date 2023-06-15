import { Injectable, UnauthorizedException, Inject } from '@nestjs/common';
import { MongoClient, Db } from 'mongodb';
import { JwtService } from '@nestjs/jwt';
import { MyUsers } from './dto/t2.dto';
import { MongoConnectios } from './connection/t2.connect';

// import { MongoConnectios } from './connection/t2.connect';


@Injectable()
export class T2Service {
    constructor(
        @Inject(JwtService) private jwtService: JwtService,
        @Inject(MongoConnectios) private mongoconnect: MongoConnectios
    ) { }


    async connections(query, userdto: MyUsers): Promise<any> {

        const users = await this.mongoconnect.connections()
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




    }
}
