import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class LoginDto {
  @IsEmail({}, { message: 'Email noto‘g‘ri formatda' })
  readonly email: string;

  @IsNotEmpty({ message: 'Parol kiritish majburiy' })
  @MinLength(6, { message: 'Parol kamida 6 ta belgidan iborat bo‘lishi kerak' })
  readonly password: string;
}