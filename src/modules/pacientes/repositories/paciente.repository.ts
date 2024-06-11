import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Paciente } from '../interfaces/paciente-interface';
import { CreatePacienteDto, UpdatePacienteDto } from '../dto/create-paciente.dto';

@Injectable()
export class PacienteRepository {
	constructor(private readonly prisma: PrismaService) {}

	async addPaciente(data: CreatePacienteDto): Promise<Paciente | null> {
		return this.prisma.pacientes.create({
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
		return this.prisma.pacientes.findFirst({
			where: {
				OR: [{ email }, { cpf }],
			},
		});
	}

	async findPacienteById(id: number): Promise<Paciente | null> {
		return this.prisma.pacientes.findUnique({
			where: { id },
			include: { endereco: true },
		});
	}

	async findPacienteAll(): Promise<Paciente[] | null> {
		return this.prisma.pacientes.findMany();
	}

	async deletePaciente(userId: number): Promise<Paciente> {
		return this.prisma.pacientes.delete({
			where: { id: userId },
		});
	}

	async updatePaciente(userId: number, data: UpdatePacienteDto): Promise<Paciente> {
		return this.prisma.pacientes.update({
			where: { id: userId },
			data: data,
		});
	}
}
