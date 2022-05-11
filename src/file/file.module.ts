import { Module } from '@nestjs/common';
import { FilesService } from './file.service';

@Module({
  exports: [FilesService],
  providers: [FilesService],
})
export class FileModule {}
