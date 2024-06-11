import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateLaudoDto {
	@IsInt()
	@IsNotEmpty()
	pacienteId: number;

	@IsString()
	@IsNotEmpty()
	descricao: string;

	@IsString()
	@IsNotEmpty()
	diagnostico: string;

	@IsString()
	@IsNotEmpty()
	recomendacoes: string;

	@IsString()
	@IsNotEmpty()
	anexos: string;
}
