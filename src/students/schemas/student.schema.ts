import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Student extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true, unique: true })
  email: string; // ✅ Auth uchun zarur

  @Prop({ required: true })
  password: string; // ✅ Auth uchun zarur

  @Prop()
  phone?: string;

  @Prop()
  photo?: string;

  @Prop({ default: 'active' })
  status: string;

  @Prop({ type: String })
  groupId?: string;

  @Prop({ default: 'student' })
  role: string; // ✅ Auth uchun kerak
}

export type StudentDocument = Student & Document;
export const StudentSchema = SchemaFactory.createForClass(Student);