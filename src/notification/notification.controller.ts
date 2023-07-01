import { Controller, Query, Sse } from '@nestjs/common';
import { Observable, from, map } from 'rxjs';
import { NotificationService } from './notification.service';

@Controller('notification')
export class NotificationController {
    constructor(private readonly notificationService: NotificationService) { }

    
    @Sse('stream')
    // @Query('studentId')
    stream(studentId: number): Observable<{ data: any; }> {
         // Convert the result to an Observable using the from function
        //  console.log(studentId);
         
        return from(this.notificationService.getFeedbacks(studentId)).pipe(
            map(feedback => ({
                data: feedback,
            })
            )
        )
    }

}
