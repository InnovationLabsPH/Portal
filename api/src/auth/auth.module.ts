import { Module } from '@nestjs/common';
import { JwtStrategy } from './jwt.strategy';
import { JwtAuthGuard } from './jwt.guard';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    PassportModule,
  ],
  providers: [JwtStrategy, JwtAuthGuard],
  exports: [JwtAuthGuard],
})
export class AuthModule {}
