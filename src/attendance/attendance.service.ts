import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Attendance } from './schemas/attendance.schema';

@Injectable()
export class AttendanceService {
  constructor(@InjectModel(Attendance.name) private attendanceModel: Model<Attendance>) {}

  async mark(teacherId: string, studentId: string, present: boolean) {
    const record = await this.attendanceModel.findOneAndUpdate(
      { teacherId, studentId, date: new Date().toDateString() },
      { present },
      { upsert: true, new: true },
    );
    return record;
  }

  async getByTeacher(teacherId: string) {
    const records = await this.attendanceModel.find({ teacherId });
    const presentCount = records.filter(r => r.present).length;
    return {
      total: records.length,
      present: presentCount,
      absent: records.length - presentCount,
      percentage: records.length ? (presentCount / records.length) * 100 : 0,
    };
  }
}