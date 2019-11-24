import { Controller, Get, Param, Post, Body, Patch, Delete, UseGuards } from '@nestjs/common';

import { Delivery } from './delivery';
import { DeliveriesService } from './deliveries.service';
import { AuthGuard } from '@nestjs/passport';

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

    @UseGuards(AuthGuard('jwt'))
    @Post('/')
    async create(@Body() delivery: Delivery): Promise<Delivery> {
        return await this.deliveriesService.create(delivery);
    }

    @UseGuards(AuthGuard('jwt'))
    @Patch('/:id')
    async update(@Param() params, @Body() delivery: Delivery): Promise<Delivery> {
        return await this.deliveriesService.update(params.id, delivery);
    }

    @UseGuards(AuthGuard('jwt'))
    @Delete('/:id')
    async delete(@Param() params): Promise<boolean> {
        return await this.deliveriesService.delete(params.id);
    }


}
