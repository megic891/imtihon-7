import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateStudentDto {
  @IsNotEmpty()
  @IsString()
  fullName: string;

  @IsOptional()
  @IsString()
  phone?: string;

  @IsOptional()
  @IsString()
  groupId?: string;
}