import { Module } from '@nestjs/common';
import { T2Service } from './t2.service';
import { T2Controller } from './t2.controller';
import { JwtModule } from '@nestjs/jwt';
import { MongoConnectios } from './connection/t2.connect';

@Module({
  imports:[JwtModule.register({
    global: true,
    secret: "dasdsaddad",
    signOptions: { expiresIn: '60s' },
  })],
  providers: [T2Service,MongoConnectios],
  controllers:[T2Controller],
  exports:[T2Service]
})
export class T2Module {}
