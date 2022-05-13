import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ENTITIES } from './common/entity/entities';
import { ConfigModule } from '@nestjs/config';
import { ControllerModule } from './controller/controller.module';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  imports: [
    MulterModule.register({
      dest: './uploads',
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'postgres',
      entities: [...ENTITIES],
    }),
    ConfigModule.forRoot({ isGlobal: true }),
    ControllerModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
