import { Injectable } from '@nestjs/common';

import { Delivery } from './delivery';

@Injectable()
export class DeliveriesService {

    async findAll(): Promise<Array<Delivery>>{
        return await [];
    }

    async findById(id: string): Promise<Delivery> {
        return await null;
    }

    async save(delivery: Delivery): Promise<Delivery> {
        return await null;
    }

    async update(id: string, delivery: Delivery): Promise<Delivery> {
        return await null;
    }

    async delete(id: string): Promise<boolean> {
        return await null;
    }


}
