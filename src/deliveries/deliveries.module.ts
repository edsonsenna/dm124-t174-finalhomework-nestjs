import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { DeliveriesController } from './deliveries.controller';
import { DeliverySchema } from './delivery.schema';
import { DeliveriesService } from './deliveries.service';

const features = [
    {
        name: 'Delivery',
        schema: DeliverySchema
    }
]

@Module({
    imports: [MongooseModule.forFeature(features)],
    controllers: [DeliveriesController],
    providers: [DeliveriesService]
})
export class DeliveriesModule {}
