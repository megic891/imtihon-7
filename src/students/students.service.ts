import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Student } from './schemas/student.schema';
import { CreateStudentDto } from './dto/create-student.dto';

@Injectable()
export class StudentsService {
  constructor(@InjectModel(Student.name) private studentModel: Model<Student>) {}

  async create(dto: CreateStudentDto, photo?: string): Promise<Student> {
    const created = new this.studentModel({ ...dto, photo });
    return created.save();
  }

  async findAll(): Promise<Student[]> {
    return this.studentModel.find().exec();
  }

  async findOne(id: string): Promise<Student> { 
    const student = await this.studentModel.findById(id);
    if (!student) throw new NotFoundException('Student not found');
    return student;
  }

  async update(id: string, dto: any): Promise<Student> {
    const updated = await this.studentModel.findByIdAndUpdate(id, dto, { new: true });
    if (!updated) throw new NotFoundException('Student not found');
    return updated;
  }

  async remove(id: string): Promise<Student> {
    const deleted = await this.studentModel.findByIdAndDelete(id);
    if (!deleted) throw new NotFoundException('Student not found');
    return deleted;
  }
}