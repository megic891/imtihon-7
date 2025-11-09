import { Controller, Get, Post, Body, Param, Delete, Put, UploadedFile, UseInterceptors } from '@nestjs/common';
import { TeachersService } from './teachers.service';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';

@Controller('teachers')
export class TeachersController {
  constructor(private readonly teachersService: TeachersService) {}

  @Post()
  @UseInterceptors(FileInterceptor('photo', {
    storage: diskStorage({
      destination: './uploads/teachers',
      filename: (req, file, cb) => cb(null, `${Date.now()}${extname(file.originalname)}`),
    }),
  }))
  create(@Body() dto: CreateTeacherDto, @UploadedFile() file: Express.Multer.File) {
    return this.teachersService.create(dto, file?.filename);
  }

  @Get()
  findAll() {
    return this.teachersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.teachersService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: any) {
    return this.teachersService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.teachersService.remove(id);
  }
}