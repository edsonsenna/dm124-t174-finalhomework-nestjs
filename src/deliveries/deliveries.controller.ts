import { Controller, Get, Param, Post, Body, Patch, Delete, UseGuards } from '@nestjs/common';

import { Delivery } from './delivery';
import { DeliveriesService } from './deliveries.service';
import { AuthGuard } from '@nestjs/passport';
import { ApiBody, ApiCreatedResponse, ApiBearerAuth, ApiOkResponse, ApiTags, ApiParam } from '@nestjs/swagger';
import { DeliveryDto } from './delivery-dto';

@ApiTags('deliveries')
@Controller('deliveries')
export class DeliveriesController {

    constructor(
        private readonly deliveriesService: DeliveriesService
    ) {}

    @Get('/')
    @ApiOkResponse({
        description: 'The records has been successfully loaded',
        type: [DeliveryDto]
    })
    async findAll(): Promise<Array<Delivery>> {
        return await this.deliveriesService.findAll();
    }

    @Get('/:id')
    @ApiParam({
        name: 'id',
        type: 'string',
        description: 'A delivery identifier'
    })
    @ApiOkResponse({
        description: 'The record has been successfully found.',
        type: DeliveryDto,
    })
    async findById(@Param() params): Promise<Delivery>{
        return await this.deliveriesService.findById(params.id);
    }

    @UseGuards(AuthGuard('jwt'))
    @Post('/')
    @ApiBearerAuth()
    @ApiBody({ type: DeliveryDto })
    @ApiCreatedResponse({
        description: 'The record has been successfully created.',
        type: DeliveryDto
    })
    async create(@Body() delivery: Delivery): Promise<Delivery> {
        return await this.deliveriesService.create(delivery);
    }

    @UseGuards(AuthGuard('jwt'))
    @ApiBearerAuth()
    @Patch('/:id')
    @ApiBody({ type: DeliveryDto })
    @ApiParam({
        name: 'id',
        type: 'string',
        description: 'A delivery identifier'
    })
    @ApiCreatedResponse({
        description: 'The record has been successfully updated.',
        type: DeliveryDto
    })
    async update(@Param() params, @Body() delivery: Delivery): Promise<Delivery> {
        return await this.deliveriesService.update(params.id, delivery);
    }

    @UseGuards(AuthGuard('jwt'))
    @ApiBearerAuth()
    @Delete('/:id')
    @ApiParam({
        name: 'id',
        type: 'string',
        description: 'A delivery identifier'
    })
    @ApiCreatedResponse({
        description: 'The record has been successfully deleted.',
        type: DeliveryDto
    })
    async delete(@Param() params): Promise<boolean> {
        return await this.deliveriesService.delete(params.id);
    }


}
