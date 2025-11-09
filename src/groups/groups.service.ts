import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Group } from './schemas/group.schema';
import { CreateGroupDto } from './dto/create-group.dto';

@Injectable()
export class GroupsService {
  constructor(@InjectModel(Group.name) private groupModel: Model<Group>) {}

  async create(dto: CreateGroupDto): Promise<Group> {
    const created = new this.groupModel(dto);
    return created.save();
  }

  async findAll(): Promise<Group[]> {
    return this.groupModel.find().exec();
  }

  async findOne(id: string): Promise<Group> {
    const group = await this.groupModel.findById(id);
    if (!group) throw new NotFoundException('Group not found');
    return group;
  }

  async update(id: string, dto: any): Promise<Group> {
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