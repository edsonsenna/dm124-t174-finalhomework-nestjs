import * as mongoose from 'mongoose';

export const DeliverySchema = new mongoose.Schema({
    id: String,
    orderId: String,
    clientId: String,
    receiverName: String,
    receiverCPF: String,
    isClientReceiver: Boolean,
    orderDate: Date,
    location: String
})