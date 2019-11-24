import { Module } from '@nestjs/common';
import { PassportModule, AuthGuard } from '@nestjs/passport';
import { JwtModule, JwtService } from '@nestjs/jwt';

import { AuthService } from './auth.service';
import { jwtConstants } from './constants';
import { JwtStrategy } from './jwt.strategy';
import { LocalStrategy } from './local.strategy';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [
    UsersModule, 
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secretKey,
      signOptions: {expiresIn: '60s'}
    })
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  exports: [AuthService]
})
export class AuthModule {}
