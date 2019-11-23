import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { DeliveriesModule } from './deliveries/deliveries.module';

@Module({
  imports: [DeliveriesModule, MongooseModule.forRoot('mongodb://admin:adm123@ds053370.mlab.com:53370/dm124-finalhomework')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
