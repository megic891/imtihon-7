import { IsMongoId, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreatePaymentDto {
  @IsMongoId()
  @IsNotEmpty()
  readonly studentId: string;

  @IsMongoId()
  @IsNotEmpty()
  readonly groupId: string;

  @IsNumber()
  @IsNotEmpty()
  readonly amount: number;

  @IsString()
  @IsOptional()
  readonly method?: string;
}