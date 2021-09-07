import { MongooseModule } from '@nestjs/mongoose';
import { PassportModule } from '@nestjs/passport';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { Module } from '@nestjs/common';

import {
  AuthService,
  AppService,
  JwtStrategy,
  PostService
} from './services';
import {
  AuthController,
  AppController,
  PostController
} from './controller';
import { CONSTANTS, getMongoURI } from './utils';
import { Post, PostSchema } from './schemas';
import { AdminGuard, JwtAuthGuard } from './guard';

@Module({
  imports: [
    MongooseModule.forRoot(
      getMongoURI()
    ),
    MongooseModule.forFeature(
      [{ name: Post.name, schema: PostSchema }]
    ),

    PassportModule,
    JwtModule.register({
      secret: CONSTANTS.JWT_SECRET,
      signOptions: {
        expiresIn: CONSTANTS.TOKEN_EXPIRE_TIME,
        notBefore: CONSTANTS.NOT_BEFORE_TIME,
      },
    }),

    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  controllers: [
    AppController,
    AuthController,
    PostController
  ],
  providers: [
    AdminGuard,
    JwtAuthGuard,
    AppService,
    AuthService,
    JwtStrategy,
    PostService
  ],
})
export class AppModule { }
