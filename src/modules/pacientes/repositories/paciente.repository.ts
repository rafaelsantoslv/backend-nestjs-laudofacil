import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Paciente } from '../interfaces/paciente-interface';
import { CreatePacienteDto } from '../dto/create-paciente.dto';

@Injectable()
export class PacienteRepository {
	constructor(private readonly prisma: PrismaService) {}

	async addPaciente(createPaciente: CreatePacienteDto): Promise<Paciente | null> {
		return this.prisma.paciente.create({
			data: {
				nome: createPaciente.nome,
				sobrenome: createPaciente.sobrenome,
				cpf: createPaciente.cpf,
				dataNascimento: createPaciente.dataNascimento,
				sexo: createPaciente.sexo,
				email: createPaciente.email,
				telefone: createPaciente.telefone,
			},
		});
	}

	async findPacienteByEmailandCpf(email: string, cpf: string) {
		return this.prisma.paciente.findFirst({
			where: {
				OR: [{ email }, { cpf }],
			},
		});
	}

	async findPacienteById(id: number): Promise<Paciente | null> {
		return this.prisma.paciente.findUnique({
			where: { id },
			include: { endereco: true },
		});
	}
}
