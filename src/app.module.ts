import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { AuthModule } from './auth/auth.module';
import { DeliveriesModule } from './deliveries/deliveries.module';
import { UsersModule } from './users/users.module';

const dbUrl = 'mongodb://admin:adm123@ds053370.mlab.com:53370/dm124-finalhomework';
const dbOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true
};

@Module({
  imports: [AuthModule, DeliveriesModule, MongooseModule.forRoot(dbUrl, dbOptions), UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
