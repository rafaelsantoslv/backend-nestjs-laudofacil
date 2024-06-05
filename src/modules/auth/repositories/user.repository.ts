import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { User } from 'src/modules/auth/interfaces/user-interface';

@Injectable()
export class UserRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findByEmailAndPassword(email: string, password: string): Promise<User | null> {
    return this.prisma.usuarios.findFirst({
      where: {
        email,
        password,
      },
    });
  }
}
