import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateGroupDto {
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