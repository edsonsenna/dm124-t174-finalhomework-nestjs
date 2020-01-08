import { ApiProperty } from "@nestjs/swagger";

export class DeliveryDto {

    @ApiProperty()
    id: string;

    @ApiProperty()
    orderId: string;

    @ApiProperty()
    clientId: string;

    @ApiProperty()
    receiverName: string;

    @ApiProperty()
    receiverCPF: string;

    @ApiProperty()
    isClientReceiver: boolean;

    @ApiProperty({ type: () => Date})
    orderDate: Date;

    @ApiProperty()
    location: string;
}