import { IsMongoId, IsNotEmpty, IsString } from 'class-validator';

export class CreateRequestDto {
  @IsMongoId()
  @IsNotEmpty()
  readonly studentId: string;

  @IsString()
  @IsNotEmpty()
  readonly type: string;

  @IsString()
  @IsNotEmpty()
  readonly message: string;
}