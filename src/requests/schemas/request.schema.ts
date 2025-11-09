import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema({ timestamps: true })
export class Request extends Document {
  @Prop({ type: Types.ObjectId, ref: 'Student', required: true })
  studentId: Types.ObjectId;

  @Prop({ required: true })
  type: string; 

  @Prop({ required: true })
  message: string;

  @Prop({ default: 'pending', enum: ['pending', 'approved', 'rejected'] })
  status: string;
}

export const RequestSchema = SchemaFactory.createForClass(Request);