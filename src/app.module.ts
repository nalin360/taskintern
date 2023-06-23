import { Module ,NestModule, MiddlewareConsumer} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaskModule } from './task/task.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { T2Module } from './t2/t2.module';
import { MidwayModule } from './midway/midway.module';
import { LoggerMiddleware } from './middleware/logger.middleware';
import { InterceptorModule } from './interceptor/interceptor.module';
import { FeedbackController } from './feedback/feedback.controller';
import { FeedbackService } from './feedback/feedback.service';
import { FeedbackModule } from './feedback/feedback.module';



@Module({
  imports: [TaskModule , 
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/task'), 
    UserModule,T2Module,MidwayModule, InterceptorModule, FeedbackModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes('/midway');
  }
}
