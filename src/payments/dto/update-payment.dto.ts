import { PartialType } from '@nestjs/mapped-types';
import { CreatePaymentDto } from './create-payment.dto';
import { IsBoolean, IsOptional } from 'class-validator';

export class UpdatePaymentDto extends PartialType(CreatePaymentDto) {
  @IsOptional()
  @IsBoolean()
  readonly isRefunded?: boolean;
}