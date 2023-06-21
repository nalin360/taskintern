import { Controller, Get, Post, UseInterceptors } from '@nestjs/common';
import { LoggingInterceptor } from './logging.interceptor';

@Controller('interceptor')
@UseInterceptors(LoggingInterceptor)
export class InterceptorController {

    @Get()
    getInterceptor(){
        return "login interceptor "
    }

    @Post()
    postInterceptors(){
        return "postInterceptors"
    }
}
