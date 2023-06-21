import { Controller , Get  } from '@nestjs/common';
// import { AppService } from 'src/app.service';

@Controller('midway')
export class MidwayController {

    @Get()
    hello(): string {
        // return this.appService
        return "Middleware"
    }

    // @Post()
    // throwErrors(): string{
    //     throw new HttpException("Error",HttpStatus.FORBIDDEN)
    // }


}
