import { Module } from '@nestjs/common';
import { UserService } from './user.service.ts';
import { UserController } from './user.controller.ts';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity.ts';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UserService],
  controllers: [UserController]
})
export class UserModule {}
