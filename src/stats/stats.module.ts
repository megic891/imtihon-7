import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { StatsController } from './stats.controller';
import { StatsService } from './stats.service';
import { Student, StudentSchema } from '../students/schemas/student.schema';
import { Teacher, TeacherSchema } from '../teachers/schemas/teacher.schema';
import { Payment, PaymentSchema } from '../payments/schemas/payment.schema';
import { Attendance, AttendanceSchema } from '../attendance/schemas/attendance.schema';
import { Request, RequestSchema } from '../requests/schemas/request.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Student.name, schema: StudentSchema },
      { name: Teacher.name, schema: TeacherSchema },
      { name: Payment.name, schema: PaymentSchema },
      { name: Attendance.name, schema: AttendanceSchema },
      { name: Request.name, schema: RequestSchema },
    ]),
  ],
  controllers: [StatsController],
  providers: [StatsService],
})
export class StatsModule {}