import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

import { UserModule } from '@api/user/user.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { ACCESS_TOKEN_EXPIRE, jwtConstants } from './constants';
import { JwtStrategy } from './jwt.strategy';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from './roles.guard';
import { JwtAuthGuard } from './jwt-auth.guard';

@Module({
  imports: [
    UserModule,
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: ACCESS_TOKEN_EXPIRE },
    }),
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    JwtStrategy,
    // { provide: APP_GUARD, useClass: JwtAuthGuard }, // Enable authentication globally, public api: use Public decorator on api handler
    // { provide: APP_GUARD, useClass: RolesGuard }, // Enable authorization globally
  ],
  exports: [AuthService],
})
export class AuthModule {}
