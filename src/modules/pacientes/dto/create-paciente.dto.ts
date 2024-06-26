import { PartialType } from '@nestjs/swagger';
import { IsString, IsEmail, IsNotEmpty, Length } from 'class-validator';

export class CreatePacienteDto {
	@IsString()
	@IsNotEmpty()
	nome: string;

	@IsString()
	@IsNotEmpty()
	sobrenome: string;

	@IsString()
	@IsNotEmpty()
	@Length(11, 11)
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
}

export class UpdatePacienteDto extends PartialType(CreatePacienteDto) {}
