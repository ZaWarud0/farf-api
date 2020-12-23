import { Schema, Document } from 'mongoose';

// Defining the mongoose schema for the Form model
export const FormsSchema = new Schema({
    date: { type: Date, required: true },
    division: { type: String, required: true },
    reqNo: { type: String, required: true },
    remarks: String,
    data: { type: Array, required: true },
    preparedBy: { type: String, required: true },
    approvedBy: { type: String, required: true }
})

type FormData = {
    no: string,
    budgetCode: string,
    quantity: number,
    description: string,
    budgetedAmount: number,
    location: string,
    assetPRID: string,
    assetCode: string
}

// Defining the Form model interface
export interface Form extends Document {
    id: string;
    date: Date;
    division: string;
    reqNo: string;
    remarks: string;
    data: Array<FormData>;
    preparedBy: string;
    approvedBy: string;
}
