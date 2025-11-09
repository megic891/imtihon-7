import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Attendance extends Document {
  @Prop({ required: true })
  teacherId: string;

  @Prop({ required: true })
  studentId: string;

  @Prop({ required: true })
  date: Date;

  @Prop({ default: false })
  present: boolean;
}

export const AttendanceSchema = SchemaFactory.createForClass(Attendance);