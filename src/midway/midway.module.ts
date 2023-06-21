import { Module } from '@nestjs/common';
import { AppService } from 'src/app.service';
import { MidwayController } from './midway.controller';

@Module({
    imports : [],
    controllers:[MidwayController],
    providers: [AppService , MidwayController],
})
export class MidwayModule {}
