import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateTeacherDto {
  @IsNotEmpty()
  @IsString()
  fullName: string;

  @IsOptional()
  @IsString()
  phone?: string;

  @IsOptional()
  @IsString()
  subject?: string;
}