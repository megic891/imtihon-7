import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Group extends Document {
  @Prop({ required: true })
  name: string;

  @Prop()
  teacherId: string;

  @Prop()
  scheduleDay: string;

  @Prop()
  scheduleTime: string;
}

export const GroupSchema = SchemaFactory.createForClass(Group);