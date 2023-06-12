import { Body, Controller,Post} from '@nestjs/common';
import { CheckUserDto } from './dto/user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userService:UserService){}


    @Post('login')
    validateUser(@Body() checkUserDto:CheckUserDto){
        return this.userService.findOneOnly(checkUserDto)
    }
}
