import { IsEmail, IsNotEmpty, IsString, MinLength, ValidateIf } from 'class-validator';

export class LoginDto {
  @ValidateIf((o) => !o.username)
  @IsNotEmpty({ message: 'O email é obrigatório quando o username não é fornecido.' })
  @IsEmail({}, { message: 'O email deve ser um endereço de email válido.' })
  email?: string;

  @IsNotEmpty({ message: 'A senha é obrigatória.' })
  @IsString({ message: 'A senha deve ser uma string.' })
  @MinLength(6, { message: 'A senha deve ter no mínimo 6 caracteres.' })
  password: string;
}
