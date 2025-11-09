import { Controller, Get, Post, Body, Param, Delete, Put, UploadedFile, UseInterceptors } from '@nestjs/common';
import { StudentsService } from './students.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';

@Controller('students')
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {}

  @Post()
  @UseInterceptors(FileInterceptor('photo', {
    storage: diskStorage({
      destination: './uploads/students',
      filename: (req: any, file: { originalname: string; }, cb: (arg0: null, arg1: string) => void) => {
        cb(null, `${Date.now()}${extname(file.originalname)}`);
      },
    }),
  }))
  create(@Body() dto: CreateStudentDto, @UploadedFile() file: Express.Multer.File) {
    return this.studentsService.create(dto, file?.filename);
  }

  @Get()
  findAll() {
    return this.studentsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.studentsService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: any) {
    return this.studentsService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.studentsService.remove(id);
  }
}