// import { Injectable, NotFoundException } from '@nestjs/common';
// import { InjectModel } from '@nestjs/mongoose';
// import { Model } from 'mongoose';
// import { Group } from './schemas/group.schema';
// import { CreateGroupDto } from './dto/create-group.dto';

// @Injectable()
// export class GroupsService {
//   constructor(@InjectModel(Group.name) private groupModel: Model<Group>) {}

//   async create(dto: CreateGroupDto): Promise<Group> {
//     const created = new this.groupModel(dto);
//     return created.save();
//   }

//   async findAll(): Promise<Group[]> {
//     return this.groupModel.find().exec();
//   }

//   async findOne(id: string): Promise<Group> {
//     const group = await this.groupModel.findById(id);
//     if (!group) throw new NotFoundException('Group not found');
//     return group;
//   }

//   async update(id: string, dto: any): Promise<Group> {
//     const updated = await this.groupModel.findByIdAndUpdate(id, dto, { new: true });
//     if (!updated) throw new NotFoundException('Group not found');
//     return updated;
//   }

//   async remove(id: string): Promise<Group> {
//     const deleted = await this.groupModel.findByIdAndDelete(id);
//     if (!deleted) throw new NotFoundException('Group not found');
//     return deleted;
//   }
// }


import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Group } from './schemas/group.schema';
import { CreateGroupDto } from './dto/create-group.dto';
import { Teacher } from '../teachers/schemas/teacher.schema';

@Injectable()
export class GroupsService {
  constructor(
    @InjectModel(Group.name) private groupModel: Model<Group>,
    @InjectModel(Teacher.name) private teacherModel: Model<Teacher>,
  ) {}


  async create(dto: CreateGroupDto): Promise<Group> {
    const { teacherId } = dto;

   
    const teacher = await this.teacherModel.findById(teacherId);
    if (!teacher) {
      throw new BadRequestException('Teacher not found');
    }

    const created = new this.groupModel(dto);
    return created.save();
  }

  
  async findAll(): Promise<Group[]> {
    return this.groupModel.find().populate('teacherId').exec();
  }

  
  async findOne(id: string): Promise<Group> {
    const group = await this.groupModel.findById(id).populate('teacherId');
    if (!group) throw new NotFoundException('Group not found');
    return group;
  }

  
  async update(id: string, dto: any): Promise<Group> {
    
    if (dto.teacherId) {
      const teacher = await this.teacherModel.findById(dto.teacherId);
      if (!teacher) {
        throw new BadRequestException('Teacher not found');
      }
    }

    const updated = await this.groupModel.findByIdAndUpdate(id, dto, { new: true });
    if (!updated) throw new NotFoundException('Group not found');
    return updated;
  }


  async remove(id: string): Promise<Group> {
    const deleted = await this.groupModel.findByIdAndDelete(id);
    if (!deleted) throw new NotFoundException('Group not found');
    return deleted;
  }
}