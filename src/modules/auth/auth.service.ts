import { BadGatewayException, Injectable, UnauthorizedException } from '@nestjs/common';
import { UserRepository } from 'src/modules/auth/repositories/user.repository';
import { LoginResponse } from 'src/modules/auth/interfaces/user-interface';
import { LoginDto } from './dto/loginDto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly jwtService: JwtService,
  ) {}

  async login(loginDto: LoginDto): Promise<LoginResponse> {
    try {
      const user = await this.userRepository.findByEmailAndPassword(loginDto.email, loginDto.password);
      if (!user) {
        throw new BadGatewayException('Invalid credentials');
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
    } catch (error) {
      throw new UnauthorizedException('Erro ao fazer login: ', error.message);
    }
  }
}
