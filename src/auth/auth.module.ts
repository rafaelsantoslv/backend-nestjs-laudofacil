import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserRepository } from 'src/repositories/user.repository';

@Module({
  imports: [PrismaModule],
  controllers: [AuthController],
  providers: [UserRepository, AuthService],
  exports: [AuthService],
})
export class AuthModule {}
