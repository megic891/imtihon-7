import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Student, StudentDocument } from '../students/schemas/student.schema';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(Student.name) private studentModel: Model<StudentDocument>,
    private jwtService: JwtService,
  ) {}

  async register(dto: RegisterDto) {
    const existing = await this.studentModel.findOne({ email: dto.email }).exec();
    if (existing) throw new UnauthorizedException('User already exists');

    const hashedPassword = await bcrypt.hash(dto.password, 10);

    const newStudent = new this.studentModel({
      name: dto.name,
      email: dto.email,
      password: hashedPassword,
      role: dto.role || 'student',
    });

    const savedStudent = await newStudent.save();

    
    const studentObj = savedStudent.toObject();

    return this.generateTokens(
      (studentObj._id as Types.ObjectId).toHexString(),
      studentObj.email,
    );
  }

 
  async login(dto: LoginDto) {
    const user = await this.studentModel.findOne({ email: dto.email }).exec();
    if (!user) throw new UnauthorizedException('User not found');

    const match = await bcrypt.compare(dto.password, user.password);
    if (!match) throw new UnauthorizedException('Wrong password');

    const userObj = user.toObject();

    return this.generateTokens(
      (userObj._id as Types.ObjectId).toHexString(),
      userObj.email,
    );
  }

  
  async generateTokens(userId: string, email: string) {
    const accessToken = await this.jwtService.signAsync(
      { sub: userId, email },
      {
        secret: process.env.JWT_SECRET || 'ACCESS_SECRET',
        expiresIn: '15m',
      },
    );

    const refreshToken = await this.jwtService.signAsync(
      { sub: userId, email },
      {
        secret: process.env.JWT_REFRESH || 'REFRESH_SECRET',
        expiresIn: '7d',
      },
    );

    return { accessToken, refreshToken };
  }


  async logout() {
    return { message: 'Logout successful' };
  }
}