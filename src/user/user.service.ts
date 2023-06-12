import { Injectable } from '@nestjs/common';
import { CheckUserDto } from './dto/user.dto';


@Injectable()
export class UserService {
    private readonly users = [
        {
          userId: 1,
          username: 'papu@gmail.com',
          password: 'papu',
          role:'admin'
        },
        {
          userId: 2,
          username: 'tappu@gmail.com',
          password: 'tappu',
          role:'user'
        },
      ];
      
      async findOneOnly(username): Promise<CheckUserDto> {
        console.log(this.users.find(user => user.username === username));
        
        return this.users.find(user => user.username === username);
      }
}
