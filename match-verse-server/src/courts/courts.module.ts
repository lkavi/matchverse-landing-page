import { Module } from '@nestjs/common';
import { CourtsController } from './courts.controller';
import { CourtsService } from './courts.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [CourtsController],
  providers: [CourtsService, PrismaService],
  exports: [CourtsService],
})
export class CourtsModule { }
