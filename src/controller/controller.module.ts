import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServiceModule } from '../service/service.module';
import { CONTROLLERS } from './controllers';
import { AuthModule } from '../common/auth/auth.module';
import { FileModule } from '../file/file.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([]),
    ServiceModule,
    AuthModule,
    FileModule,
  ],
  controllers: [...CONTROLLERS],
  providers: [],
})
export class ControllerModule {}
