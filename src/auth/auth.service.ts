import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserRepository } from 'src/repositories/user.repository';
import { LoginResponse } from 'src/interfaces/user-interface';
import { LoginDto } from './dto/loginDto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly jwtService: JwtService,
  ) {}

  async login(loginDto: LoginDto): Promise<LoginResponse> {
    const user = await this.userRepository.findByEmailAndPassword(loginDto.email, loginDto.password);
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const payload = { username: user.email, sub: user.id };
    const access_token = this.jwtService.sign(payload);
    return {
      user: {
        id: user.id,
        email: user.email,
      },
      access_token,
    };
  }
}
