import { IsEmail, IsNotEmpty, MinLength, MaxLength, IsString, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class RegisterDto {
  @ApiProperty({ example: 'Ali Annazarov', description: 'Foydalanuvchi toliq ismi' })
  @IsNotEmpty({ message: 'Ism bo‘sh bo‘lmasligi kerak' })
  @IsString()
  readonly name: string;


  @ApiProperty({ example: 'xmmegic@example.com', description: 'Foydalanuvchi emaili' })
  @IsEmail({}, { message: 'Email noto‘g‘ri formatda' })
  readonly email: string;
   

  @ApiProperty({ enum: ['student', 'teacher']  })
  @IsOptional()
  @IsString()
  role: string;

  @ApiProperty({ example: '12345678', description: 'Foydalanuvchi paroli (kamida 8 ta belgi)' })
  @IsNotEmpty({ message: 'Parol kiritish majburiy' })
  @MinLength(6, { message: 'Parol kamida 6 ta belgidan iborat bo‘lishi kerak' })
  @MaxLength(100, { message: 'Parol 100 ta belgidan oshmasligi kerak' })
  readonly password: string;
}

