import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserRepository } from 'src/repositories/user.repository';
import { User } from 'src/interfaces/user-interface';

@Injectable()
export class AuthService {
  constructor(private readonly userRepository: UserRepository) {}

  async login(email: string, password: string): Promise<User> {
    const user = await this.userRepository.findByEmailAndPassword(email, password);
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }
    return user;
  }
}
