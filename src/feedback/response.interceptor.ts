import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  Logger,
  BadGatewayException
} from '@nestjs/common';
// import { json } from 'express';
// import Flatted from 'flatted';
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

// Flatted
@Injectable()
export class ResponseInterceptor implements NestInterceptor {
  private readonly logger = new Logger(ResponseInterceptor.name);

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {

    const url = context.switchToHttp().getRequest().url;
    const statusCode = context.switchToHttp().getResponse().statusCode;
    // const { method, originalUrl, rawHeaders, body, query  } = response;
    // const class_name = context.getClass().name;
    // const path = response.url;
    // const timestamp = new Date().toISOString();
    // const getHandler = context.getHandler().name
    // const getHandler = context.getHandler()
    // const flat = Flatted.stringify(response)
    // console.log(response);
    // console.log(getHandler);
    // console.log(cla);


    return next.handle().pipe(
      catchError(err => throwError(() => new BadGatewayException(
        {
          message: 'ResponseInterceptor',
          path: url,
          description: `Server error `,
          statusCode:statusCode
        }
        
      ))),
      map(data => {
        const response = context.switchToHttp().getResponse();
        const statusCode = response.statusCode;
        const path = context.switchToHttp().getRequest().url;
        const timestamp = new Date().toISOString();
        return {
          statusCode,
          path,
          timestamp,
          data: data
        }


      })
    );

  }
}
