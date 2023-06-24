import { Injectable, NestInterceptor, ExecutionContext, CallHandler,Logger } from '@nestjs/common';
// import { json } from 'express';
// import Flatted from 'flatted';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

// Flatted
@Injectable()
export class FeedbackInterceptor implements NestInterceptor {
    private readonly logger = new Logger(FeedbackInterceptor.name);
  
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {


    const response = context.switchToHttp().getResponse();
        // const { method, originalUrl, rawHeaders, body, query  } = response;
        const class_name = context.getClass().name;
        // const getHandler = context.getHandler().name
        // const getHandler = context.getHandler()
        // const flat = Flatted.stringify(response)
        console.log(response);
        // console.log(getHandler);S
        

    return next.handle().pipe(
      tap(() => {
        this.logger.log(
            `
            | ${response.method} ${response.url} 
            | class_name ${class_name} 
            | headers ${response.rawHeaders} 
            | query ${response.query} 
            | body ${response.body} 
            | Response status: ${response.statusCode}
            `
        );
        // console.log(`Response status: ${response.statusCode}`);
      }),
    );
  }
}
