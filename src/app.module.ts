import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

import { AuthModule } from './auth/auth.module';
import { StudentsModule } from './students/students.module';
import { TeachersModule } from './teachers/teachers.module';
import { GroupsModule } from './groups/groups.module';
import { AttendanceModule } from './attendance/attendance.module';
import { PaymentsModule } from './payments/payments.module';
import { RequestsModule } from './requests/requests.module';
import { StatsModule } from './stats/stats.module';
import { UploadsModule } from './uploads/uploads.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot(process.env.MONGO_URI || 'mongodb://localhost/crm_panel'),
    AuthModule,
    StudentsModule,
    TeachersModule,
    GroupsModule,
    AttendanceModule,
    PaymentsModule,
    RequestsModule,
    StatsModule,
    UploadsModule,
  ],
})
export class AppModule {}