import { Module } from '@nestjs/common';
import { Service } from './auth.service';
import { ControllerController } from './auth.controller';

@Module({
  providers: [Service],
  controllers: [ControllerController]
})
export class AuthModule {}
