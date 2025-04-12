import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserControllerController } from './user.controller';

@Module({
  providers: [UserService],
  controllers: [UserControllerController]
})
export class UserModule {}
