import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateTeacherDto {
  @ApiProperty({ example: 'Ali Maqsudov', description: 'Foydalanuvchi to‘liq ismi' })
  @IsNotEmpty()
  @IsString()
  fullName: string;

  @ApiProperty({ example: '+998000000000', description: 'Foydalanuvchi telefon nomeri' })
  @IsOptional()
  @IsString()
  phone: string;

  @IsOptional()
  @IsString()
  subject: string;

  @ApiProperty({ example: 'Ali@gmail.com', description: 'Foydalanuvchi emaili' })
  @IsOptional()
  @IsString()
  email: string;
    @ApiProperty({ example: 'rasm kiritiladi ', description: 'rasm majburiy' })
  @IsOptional()
  @IsString()
  photo: string;
}