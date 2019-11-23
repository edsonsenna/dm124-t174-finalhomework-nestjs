import { Controller, Get, Param, Post, Body, Patch, Delete } from '@nestjs/common';

import { Delivery } from './delivery';
import { DeliveriesService } from './deliveries.service';

@Controller('deliveries')
export class DeliveriesController {

    constructor(
        private readonly deliveriesService: DeliveriesService
    ) {}

    @Get('/')
    async findAll(): Promise<Array<Delivery>> {
        return await this.deliveriesService.findAll();
    }

    @Get('/:id')
    async findById(@Param() params): Promise<Delivery>{
        return await this.deliveriesService.findById(params.id);
    }

    @Post('/')
    async create(@Body() delivery: Delivery): Promise<Delivery> {
        return await this.deliveriesService.create(delivery);
    }

    @Patch('/:id')
    async update(@Param() params, @Body() delivery: Delivery): Promise<Delivery> {
        return await this.deliveriesService.update(params.id, delivery);
    }

    @Delete('/:id')
    async delete(@Param() params): Promise<boolean> {
        return await this.deliveriesService.delete(params.id);
    }


}
