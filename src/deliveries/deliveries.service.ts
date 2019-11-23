import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Delivery } from './delivery';

@Injectable()
export class DeliveriesService {

    constructor(@InjectModel('Delivery') private readonly deliveryModel: Model<Delivery>) {}

    async findAll(): Promise<Array<Delivery>>{
        return await this.deliveryModel.find().exec();
    }

    async findById(id: string): Promise<Delivery> {
        return await null;
    }

    async create(delivery: Delivery): Promise<Delivery> {
        const createdDelivery = new this.deliveryModel(delivery);
        return await createdDelivery.save();
    }

    async update(id: string, delivery: Delivery): Promise<Delivery> {
        return await null;
    }

    async delete(id: string): Promise<boolean> {
        return await null;
    }


}
