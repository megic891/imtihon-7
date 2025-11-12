import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateGroupDto {
  @ApiProperty({ example: 'Islombek Annazarov', description: 'Foydalanuvchi to‘liq ismi' })
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  teacherId?: string;

  @IsOptional()
  @IsString()
  scheduleDay?: string;

  @IsOptional()
  @IsString()
  scheduleTime?: string;
}