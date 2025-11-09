import { PartialType } from '@nestjs/mapped-types';
import { CreateRequestDto } from './create-request.dto';
import { IsString, IsOptional } from 'class-validator';

export class UpdateRequestDto extends PartialType(CreateRequestDto) {
  @IsOptional()
  @IsString()
  readonly status?: string;
}