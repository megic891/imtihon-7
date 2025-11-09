import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Teacher extends Document {
  @Prop({ required: true })
  fullName: string;

  @Prop()
  phone: string;

  @Prop()
  photo: string;

  @Prop()
  subject: string;
}

export const TeacherSchema = SchemaFactory.createForClass(Teacher);