import { Controller, Post, Get, Body } from '@nestjs/common';
import { PaymentsService } from './payments.service';

@Controller('payments')
export class PaymentsController {
  constructor(private readonly paymentsService: PaymentsService) {}

  @Post()
  create(@Body() dto: any) {
    return this.paymentsService.create(dto);
    
  }

  @Get()
  findAll() {
    return this.paymentsService.findAll();
  }
}