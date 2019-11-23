import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DeliveriesController } from './deliveries/deliveries.controller';
import { DeliveriesService } from './deliveries/deliveries.service';

@Module({
  imports: [],
  controllers: [AppController, DeliveriesController],
  providers: [AppService, DeliveriesService],
})
export class AppModule {}
