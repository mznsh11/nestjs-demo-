import { Module } from '@nestjs/common';
import { PublishersController } from './publishers.controller';
import { PublishersService } from './publishers.service';

@Module({
  providers: [PublishersService],
  controllers: [PublishersController]
})
export class PublishersModule {}
