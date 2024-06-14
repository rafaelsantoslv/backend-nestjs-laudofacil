import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateLaudoDto } from '../dto/create-laudo.dto';
import { Laudo } from '../interfaces/laudo-interface';
import { UpdateLaudoDto } from '../dto/update-laudo.dto';

@Injectable()
export class LaudoRepository {
	constructor(private readonly prisma: PrismaService) {}

	async addLaudo(data: CreateLaudoDto): Promise<Laudo> {
		return this.prisma.laudos.create({
			data: {
				pacienteId: data.pacienteId,
				descricao: data.descricao,
				diagnostico: data.diagnostico,
				recomendacoes: data.recomendacoes,
				anexos: data.anexos,
			},
		});
	}

	async findOneLaudo(id: number): Promise<Laudo> {
		return this.prisma.laudos.findUnique({
			where: { id },
		});
	}

	async findAllLaudoByPacienteId(pacienteId: number): Promise<Laudo[]> {
		return this.prisma.laudos.findMany({
			where: { pacienteId },
		});
	}

	async deleteLaudo(id: number): Promise<Laudo> {
		return this.prisma.laudos.delete({
			where: { id },
		});
	}

	async updateLaudo(id: number, data: UpdateLaudoDto): Promise<Laudo> {
		return this.prisma.laudos.update({
			where: { id },
			data: data,
		});
	}
}
