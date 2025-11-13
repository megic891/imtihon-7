import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env', 
      validationSchema: Joi.object({
        PORT: Joi.number().default(4001),
        MONGO_URI: Joi.string().required(),
        JWT_SECRET: Joi.string().required(),
        JWT_REFRESH: Joi.string().required(),
      }),
    }),
  ],
})
export class AppConfigModule {} 