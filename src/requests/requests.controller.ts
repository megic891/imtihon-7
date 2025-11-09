import { Controller, Get, Post, Body, Delete, Param } from '@nestjs/common';
import { RequestsService } from './requests.service';

@Controller('requests')
export class RequestsController {
  constructor(private readonly requestsService: RequestsService) {}

  @Post()
  create(@Body() dto: any) {
    return this.requestsService.create(dto);
  }

  @Get()
  findAll() {
    return this.requestsService.findAll();
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.requestsService.remove(id);
  }
}