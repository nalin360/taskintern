import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()

export class FeedbackInterceptor implements NestInterceptor{

    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {

        const responses = context.switchToHttp().getResponse()
        return next 
        .handle()
        .pipe(
            tap(() => console.log(`response ${responses.statusCode}`)),
          );
    }
   
}