import { Body, Controller,Post} from '@nestjs/common';
import { CheckUserDto, IsUserFail } from './dto/user.dto';
import { UserService } from './user.service';


@Controller('user')
export class UserController {
    constructor(private readonly userService:UserService){}

    @Post()
    getUserDetails(@Body() checkUserDto:CheckUserDto){
        return this.userService.findOnes(checkUserDto)
    }

    @Post('login')
    async validateUser(@Body() checkUserDto:CheckUserDto):Promise<IsUserFail>{
        const validUsers = await this.userService.findOnes(checkUserDto)
        // console.log(users);
        // is user exits { success: true } if null false vedik01010@/NS420
        if (validUsers) {
            return { success: true };
          } else {
            return { success: false };
          }
    }

}
