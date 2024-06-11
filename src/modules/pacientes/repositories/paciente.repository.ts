import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Paciente } from '../interfaces/paciente-interface';
import { CreatePacienteDto, UpdatePacienteDto } from '../dto/create-paciente.dto';

@Injectable()
export class PacienteRepository {
	constructor(private readonly prisma: PrismaService) {}

	async addPaciente(data: CreatePacienteDto): Promise<Paciente | null> {
		return this.prisma.paciente.create({
			data: {
				nome: data.nome,
				sobrenome: data.sobrenome,
				cpf: data.cpf,
				dataNascimento: data.dataNascimento,
				sexo: data.sexo,
				email: data.email,
				telefone: data.telefone,
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

	async findPacienteAll(): Promise<Paciente[] | null> {
		return this.prisma.paciente.findMany();
	}

	async deletePaciente(userId: number): Promise<Paciente> {
		return this.prisma.paciente.delete({
			where: { id: userId },
		});
	}

	async updatePaciente(userId: number, data: UpdatePacienteDto): Promise<Paciente> {
		return this.prisma.paciente.update({
			where: { id: userId },
			data: data,
		});
	}
}
