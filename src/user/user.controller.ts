import { Body, Controller,Get,Post} from '@nestjs/common';
import { CheckUserDto, IsUserDto, IsUserFail } from './dto/user.dto';
import { UserService } from './user.service';
import { async } from 'rxjs';

@Controller('user')
export class UserController {
    constructor(private readonly userService:UserService){}

    @Post()
    getUserDetails(@Body() checkUserDto:CheckUserDto){
        return this.userService.findOnes(checkUserDto)
    }

    @Post('login')
    async validateUser(@Body() checkUserDto:CheckUserDto):Promise<IsUserFail>{
        const users = await this.userService.findOnes(checkUserDto)
        // console.log(users);
        // is user exits { success: true } if null false
        if (users) {
            return { success: true };
          } else {
            return { success: false };
          }
    }

}
