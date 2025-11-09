import { Controller, Post, Param, Body, Get } from '@nestjs/common';
import { AttendanceService } from './attendance.service';

@Controller('attendance')
export class AttendanceController {
  constructor(private readonly attendanceService: AttendanceService) {}

  @Post('mark')
  mark(@Body() body: { teacherId: string; studentId: string; present: boolean }) {
    return this.attendanceService.mark(body.teacherId, body.studentId, body.present);
  }

  @Get('teacher/:id')
  getByTeacher(@Param('id') teacherId: string) {
    return this.attendanceService.getByTeacher(teacherId);
  }
}