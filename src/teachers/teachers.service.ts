import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Teacher } from './schemas/teacher.schema';
import { CreateTeacherDto } from './dto/create-teacher.dto';

@Injectable()
export class TeachersService {
  constructor(@InjectModel(Teacher.name) private teacherModel: Model<Teacher>) {}

  async create(dto: CreateTeacherDto, photo?: string): Promise<Teacher> {
    const created = new this.teacherModel({ ...dto, photo });
    return created.save();
  }

  async findAll(): Promise<Teacher[]> {
    return this.teacherModel.find().exec();
  }

  async findOne(id: string): Promise<Teacher> {
    const teacher = await this.teacherModel.findById(id);
    if (!teacher) throw new NotFoundException('Teacher not found');
    return teacher;
  }

  async update(id: string, dto: any): Promise<Teacher> {
    const updated = await this.teacherModel.findByIdAndUpdate(id, dto, { new: true });
    if (!updated) throw new NotFoundException('Teacher not found');
    return updated;
  }

  async remove(id: string): Promise<Teacher> {
    const deleted = await this.teacherModel.findByIdAndDelete(id);
    if (!deleted) throw new NotFoundException('Teacher not found');
    return deleted;
  }
}