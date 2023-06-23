import { Controller, Get, Param, Post, Query, UseInterceptors, Header, Body } from '@nestjs/common';
import { LoggingInterceptor } from './logging.interceptor';
import { InterceptorService } from './interceptor.service';
// befor
@Controller('interceptor')
@UseInterceptors(LoggingInterceptor)
export class InterceptorController {

    constructor(private interceptorService: InterceptorService) { }
    @Get()



    getInterceptor() {
        return this.interceptorService.getUser()
    }

    @Post(':id')
    @Header('Content-Type', 'application/json')
    create(
        @Param('id') id: string,
        @Query('param1') param1: string,
        @Body() createUserDto: any,
    ): string {
        console.log('ID:', id);
        console.log('Param 1:', param1);
        console.log('Headers:', Header);
        console.log('Request Body:', createUserDto);
        return 'User created';
    }
}
