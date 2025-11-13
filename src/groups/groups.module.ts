import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GroupsService } from './groups.service';
import { GroupsController } from './groups.controller';
import { Group, GroupSchema } from './schemas/group.schema';
import { Teacher, TeacherSchema } from 'src/teachers/schemas/teacher.schema';

@Module({
  imports: [MongooseModule.forFeature([
    { name: Group.name, schema: GroupSchema },
    { name: Teacher.name, schema: TeacherSchema }
  ])],
  controllers: [GroupsController],
  providers: [GroupsService],
})
export class GroupsModule {}