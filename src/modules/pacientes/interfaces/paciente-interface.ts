export interface Paciente {
	id: number;
	nome: string;
	sobrenome: string;
	cpf: string;
	dataNascimento: string;
	sexo: string;
	email: string;
	telefone: string;
}

export interface PacienteAll {
	id: number;
	nome: string;
	sobrenome: string;
	cpf: string;
	dataNascimento: string;
	sexo: string;
	email: string;
	telefone: string;
	createdAt: string;
	updatedAt: string;
}
