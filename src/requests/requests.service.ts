import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Request } from './schemas/request.schema';

@Injectable()
export class RequestsService {
  constructor(@InjectModel(Request.name) private requestModel: Model<Request>) {}

  async create(dto: any) {
    const req = new this.requestModel(dto);
    return req.save();
  }

  async findAll() {
    return this.requestModel.find().exec();
  }

  async remove(id: string) {
    const deleted = await this.requestModel.findByIdAndDelete(id);
    if (!deleted) throw new NotFoundException('Request not found');
    return deleted;
  }
}