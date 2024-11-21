import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module.ts';
import { connectionSource } from './scripts/ormconfig.ts';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      ...connectionSource.options,
    }),
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
