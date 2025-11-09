import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { GroupsService } from './groups.service';
import { CreateGroupDto } from './dto/create-group.dto';

@Controller('groups')
export class GroupsController {
  constructor(private readonly groupsService: GroupsService) {}

  @Post()
  create(@Body() dto: CreateGroupDto) {
    return this.groupsService.create(dto);
  }

  @Get()
  findAll() {
    return this.groupsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.groupsService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: any) {
    return this.groupsService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.groupsService.remove(id);
  }
}