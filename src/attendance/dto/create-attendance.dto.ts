import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateAttendanceDto {
  @ApiProperty({ example: '652a1e3f9abf7b5a1d123456', description: 'Foydalanuvchi ID' })
  @IsString()
  @IsNotEmpty({ message: 'userId bo‘sh bo‘lmasligi kerak' })
  userId: string;

  @ApiProperty({ example: '2025-11-09', description: 'Davomat kuni' })
  @IsNotEmpty({ message: 'date bo‘sh bo‘lmasligi kerak' })
  date: Date;

  @ApiProperty({
    example: 'present',
    description: 'Foydalanuvchi holati',
    enum: ['present', 'absent', 'late'],
  })
  @IsEnum(['present', 'absent', 'late'])
  status: string;

  @ApiProperty({
    example: '2025-11-09T09:00:00Z',
    required: false,
    description: 'Ishga kirgan vaqt',
  })
  @IsOptional()
  checkInTime?: Date;

  @ApiProperty({
    example: '2025-11-09T18:00:00Z',
    required: false,
    description: 'Ishdan chiqqan vaqt',
  })
  @IsOptional()
  checkOutTime?: Date;
}