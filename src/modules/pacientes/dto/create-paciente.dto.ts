import { IsString, IsEmail, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';

export class CreatePacienteDto {
  @IsString()
  @IsNotEmpty()
  nome: string;

  @IsString()
  @IsNotEmpty()
  sobrenome: string;

  @IsString()
  @IsNotEmpty()
  cpf: string;

  @IsString()
  @IsNotEmpty()
  dataNascimento: string;

  @IsString()
  @IsNotEmpty()
  sexo: string;

  @IsEmail()
  email: string;

  @IsString()
  telefone: string;

  @IsNumber()
  @IsOptional()
  enderecoId?: number;
}
