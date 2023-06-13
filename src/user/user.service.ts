import { Injectable } from '@nestjs/common';
import { CheckUserDto,UserDto } from './dto/user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';


@Injectable()
export class UserService {
  constructor(@InjectModel('User') private userModel: Model<CheckUserDto>) { }
  private readonly users = [
    {
      userId: 1,
      username: 'papu@gmail.com',
      password: 'papu',
      role: 'admin'
    },
    {
      userId: 2,
      username: 'tappu@gmail.com',
      password: 'tappu',
      role: 'user'
    },
  ];

  async findOneOnly(username: string): Promise<UserDto> {
    return this.users.find(user => user.username === username);
  }
  async findOnes(username: CheckUserDto): Promise<CheckUserDto> {
    const resuser = this.userModel.findOne(username);
    // console.log(resuser);
    
    return resuser;
   
  }
}

