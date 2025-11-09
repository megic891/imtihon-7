import { IsEmail, IsNotEmpty, MinLength, MaxLength, IsString, IsOptional } from 'class-validator';

export class RegisterDto {
  @IsNotEmpty({ message: 'Ism bo‘sh bo‘lmasligi kerak' })
  @IsString()
  readonly name: string;

  @IsEmail({}, { message: 'Email noto‘g‘ri formatda' })
  readonly email: string;

  @IsOptional()
  @IsString()
  role?: string;

  @IsNotEmpty({ message: 'Parol kiritish majburiy' })
  @MinLength(6, { message: 'Parol kamida 6 ta belgidan iborat bo‘lishi kerak' })
  @MaxLength(32, { message: 'Parol 32 ta belgidan oshmasligi kerak' })
  readonly password: string;
}


