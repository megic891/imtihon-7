import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class LoginDto {

   @ApiProperty({ example: 'islom@example.com', description: 'Foydalanuvchi email manzili' })
  @IsEmail({}, { message: 'Email noto‘g‘ri formatda' })
  readonly email: string;
   
  @ApiProperty({ example: '12345678', description: 'Foydalanuvchi paroli (kamida 8 ta belgi)' })
  @IsNotEmpty({ message: 'Parol kiritish majburiy' })
  @MinLength(6, { message: 'Parol kamida 6 ta belgidan iborat bo‘lishi kerak' })
  readonly password: string;
}