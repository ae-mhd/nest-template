import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { LocalStrategy } from './strategies/local.strategy';
import { UserModule } from 'src/users/users.module';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [UserModule, PassportModule],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy],
})
//   @Module({
//   imports: [TypeOrmModule.forFeature([Users])],
//   controllers: [AuthController],
//   providers: [AuthService, UsersService, LocalStrategy],
// })
export class AuthModule {}
