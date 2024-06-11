import { BadGatewayException, BadRequestException, Injectable } from '@nestjs/common';
import { CreatePacienteDto, UpdatePacienteDto } from './dto/create-paciente.dto';
import { Paciente } from './interfaces/paciente-interface';
import { PacienteRepository } from './repositories/paciente.repository';

@Injectable()
export class PacientesService {
	constructor(private readonly pacienteRepository: PacienteRepository) {}

	async createPaciente(createPaciente: CreatePacienteDto): Promise<Paciente> {
		try {
			const pacienteExistente = await this.pacienteRepository.findPacienteByEmailandCpf(createPaciente.email, createPaciente.cpf);
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

	async findAllPaciente() {
		try {
			const pacientes = await this.pacienteRepository.findPacienteAll();
			if (!pacientes) {
				throw new BadRequestException('Falha ao buscar Pacientes no banco');
			}
			return pacientes;
		} catch (error) {
			throw new BadRequestException('Erro ao buscar todos pacientes', error.message);
		}
	}

	async deletePaciente(id: number): Promise<Paciente> {
		try {
			const deletedPaciente = await this.pacienteRepository.deletePaciente(id);
			if (!deletedPaciente) {
				throw new BadRequestException('Falha ao deletar Paciente no banco');
			}
			return deletedPaciente;
		} catch (error) {
			throw new BadRequestException('Erro ao excluir Paciente', error.message);
		}
	}

	async updatePaciente(id: number, data: UpdatePacienteDto): Promise<Paciente> {
		try {
			const consultaIdPaciente = await this.pacienteRepository.findPacienteById(id);
			if (!consultaIdPaciente) {
				throw new BadRequestException('ID não encontrado');
			}
			const updatedPaciente = await this.pacienteRepository.updatePaciente(id, data);
			return updatedPaciente;
		} catch (error) {
			throw new BadRequestException('Erro ao modificar Paciente', error.message);
		}
	}
}
