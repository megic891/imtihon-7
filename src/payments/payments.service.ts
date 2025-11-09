import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Payment } from './schemas/payment.schema';

@Injectable()
export class PaymentsService {
  constructor(@InjectModel(Payment.name) private paymentModel: Model<Payment>) {}

  async create(dto: any) {
    const created = new this.paymentModel(dto);
    return created.save();
  }

  async findAll() {
    return this.paymentModel.find().exec();
  }
}