// auth.controller.ts
import { Controller, Post, Body, HttpCode } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @HttpCode(200)
  async login(@Body('email') email: string, @Body('password') password: string) {
    const user = await this.authService.login(email, password);
    // Aqui você pode retornar um token JWT ou qualquer outra resposta necessária
    return { message: 'Login successful', user };
  }
}
