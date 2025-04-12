import { Module } from '@nestjs/common';
import { Service } from './chat.service';
import { ControllerController } from './chat.controller';

@Module({
  providers: [Service],
  controllers: [ControllerController]
})
export class ChatModule {}
