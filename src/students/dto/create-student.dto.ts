import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateStudentDto {
  @ApiProperty({ example: 'Ali Annazarov', description: 'Foydalanuvchi to‘liq ismi' })
  @IsNotEmpty()
  @IsString()
  fullName: string;

  @ApiProperty({ example: '+998000000000', description: 'Foydalanuvchi telefon nomeri' })
  @IsOptional()
  @IsString()
  phone: string;

  @IsOptional()
  @IsString()
  groupId?: string;

  @ApiProperty({ example: 'rasm kiritiladi ', description: 'rasm majburiy' })
  @IsOptional()
  @IsString()
  photo: string;
}
