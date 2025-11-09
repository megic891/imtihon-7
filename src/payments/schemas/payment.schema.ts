import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Payment extends Document {
  @Prop({ required: true })
  studentId: string;

  @Prop({ required: true })
  amount: number;

  @Prop()
  date: Date;
}

export const PaymentSchema = SchemaFactory.createForClass(Payment);