import { Body, Controller, Inject, Post, UnauthorizedException } from '@nestjs/common';
import { T2Service } from './t2.service';
import { MyUsers } from './dto/t2.dto';

@Controller('t2')
export class T2Controller {
    constructor(
        @Inject(T2Service) private readonly db: T2Service,
        
    ) { }

    @Post('user')
    async getUsers(@Body() userdto: MyUsers): Promise<any> {
        const query = { email: userdto.email };
        const users = await this.db.connections(query , userdto);
        // console.log(userdto.email);                       
        return users;
    }
}
