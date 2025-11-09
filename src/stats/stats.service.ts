import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Student } from '../students/schemas/student.schema';
import { Teacher } from '../teachers/schemas/teacher.schema';
import { Payment } from '../payments/schemas/payment.schema';
import { Attendance } from '../attendance/schemas/attendance.schema';
import { Request } from '../requests/schemas/request.schema';

@Injectable()
export class StatsService {
  constructor(
    @InjectModel(Student.name) private studentModel: Model<Student>,
    @InjectModel(Teacher.name) private teacherModel: Model<Teacher>,
    @InjectModel(Payment.name) private paymentModel: Model<Payment>,
    @InjectModel(Attendance.name) private attendanceModel: Model<Attendance>,
    @InjectModel(Request.name) private requestModel: Model<Request>,
  ) {}

  async getDashboardStats() {
    const totalStudents = await this.studentModel.countDocuments();
    const totalTeachers = await this.teacherModel.countDocuments();
    const totalPayments = await this.paymentModel.aggregate([
      { $group: { _id: null, total: { $sum: '$amount' } } },
    ]);

    const totalRequests = await this.requestModel.countDocuments();

    const attendanceStats = await this.attendanceModel.aggregate([
      {
        $group: {
          _id: '$status',
          count: { $sum: 1 },
        },
      },
    ]);

    const monthlyPayments = await this.paymentModel.aggregate([
      {
        $group: {
          _id: { $month: '$createdAt' },
          total: { $sum: '$amount' },
        },
      },
      { $sort: { '_id': 1 } },
    ]);

    return {
      totalStudents,
      totalTeachers,
      totalPayments: totalPayments[0]?.total || 0,
      totalRequests,
      attendanceStats,
      monthlyPayments,
    };
  }
}