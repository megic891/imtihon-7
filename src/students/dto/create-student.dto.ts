import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateStudentDto {
  @ApiProperty({ example: 'Islombek Annazarov', description: 'Foydalanuvchi to‘liq ismi' })
  @IsNotEmpty()
  @IsString()
  fullName: string;

  @ApiProperty({ example: '+998885291414', description: 'Foydalanuvchi telefon nomeri' })
  @IsOptional()
  @IsString()
  phone?: string;

  @IsOptional()
  @IsString()
  groupId?: string;
}