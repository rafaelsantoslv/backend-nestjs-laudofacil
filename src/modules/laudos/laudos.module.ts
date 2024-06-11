import { Module } from '@nestjs/common';
import { LaudosService } from './laudos.service';
import { LaudosController } from './laudos.controller';

@Module({
  controllers: [LaudosController],
  providers: [LaudosService],
})
export class LaudosModule {}
