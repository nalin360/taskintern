import { Injectable } from '@nestjs/common';

@Injectable()
export class InterceptorService {

    getUser(){
        return "user";
    }
}
