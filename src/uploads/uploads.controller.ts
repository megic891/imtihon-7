import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
  Get,
  Param,
  Res,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import type { Response } from 'express';
import { join } from 'path';
import * as fs from 'fs';

@Controller('uploads')
export class UploadsController {

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    if (!file) {
      return { message: 'Fayl topilmadi!' };
    }
    return {
      message: 'Fayl muvaffaqiyatli yuklandi!',
      fileName: file.filename,
      path: `/uploads/${file.filename}`,
    };
  }

  @Get(':filename')
  getFile(@Param('filename') filename: string, @Res() res: Response) {
    const filePath = join(process.cwd(), 'uploads', filename);
    if (fs.existsSync(filePath)) {
      res.sendFile(filePath);
    } else {
      res.status(404).send({ message: 'Fayl topilmadi!' });
    }
  }
}