import { BadGatewayException, BadRequestException, Injectable } from '@nestjs/common';
import { CreatePacienteDto } from './dto/create-paciente.dto';
import { Paciente } from './interfaces/paciente-interface';
import { PacienteRepository } from './repositories/paciente.repository';

@Injectable()
export class PacientesService {
	constructor(private readonly pacienteRepository: PacienteRepository) {}

	async createPaciente(createPaciente: CreatePacienteDto): Promise<Paciente> {
		try {
			const pacienteExistente = await this.pacienteRepository.findPacienteByEmailandCpf(
				createPaciente.email,
				createPaciente.cpf,
			);
			if (pacienteExistente) {
				throw new BadRequestException('Email ou CPF já existe na base');
			}
			return this.pacienteRepository.addPaciente(createPaciente);
		} catch (error) {
			throw new BadRequestException('Erro ao criar paciente', error.message);
		}
	}

	async findOnePaciente(id: number): Promise<Paciente> {
		try {
			const buscaPaciente = await this.pacienteRepository.findPacienteById(id);
			if (!buscaPaciente) {
				throw new BadGatewayException('ID não encontrado');
			}
			return buscaPaciente;
		} catch (error) {
			throw new BadRequestException('Erro ao buscar paciente', error.message);
		}
	}
}
