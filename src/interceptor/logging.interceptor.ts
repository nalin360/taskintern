import { Injectable, NestInterceptor, ExecutionContext, CallHandler, Logger, Header, Query } from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
    private readonly logger = new Logger(LoggingInterceptor.name);

    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        // Get a reference to the incoming request
        const request = context.switchToHttp().getRequest();
        // Extract the HTTP method and URL from the request object
        const { method, url , headers, body, query } = request;

        const class_name = context.getClass().name;
        // Call next interceptor in chain and return response as an Observable

        return next.handle().pipe(
            tap(() => {
                this.logger.log(
                    `${method} ${url} | class_name ${class_name} 
                    | headers ${JSON.stringify(headers)} 
                    | query ${JSON.stringify(query)} 
                    | body ${JSON.stringify(body)} `
                );
            }),
        );
    }
}