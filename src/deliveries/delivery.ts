export interface Delivery {
    id: string,
    orderId: string,
    clientId: string,
    receiverName: string,
    receiverCPF: string,
    isClientReceiver: boolean,
    orderDate: Date,
    location: string
}