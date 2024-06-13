import { BadRequestException, Injectable } from '@nestjs/common';
import { LaudoRepository } from './repositories/laudo.repository';
import { CreateLaudoDto } from './dto/create-laudo.dto';
import { PacienteRepository } from '../pacientes/repositories/paciente.repository';
// import { Paciente } from '../pacientes/interfaces/paciente-interface';

@Injectable()
export class LaudosService {
	constructor(
		private readonly laudoRepository: LaudoRepository,
		private readonly pacienteRepository: PacienteRepository,
	) {}

	async createLaudo(data: CreateLaudoDto) {
		try {
			const pacienteExistente = await this.pacienteRepository.findPacienteById(data.pacienteId);
			if (!pacienteExistente) {
				throw new BadRequestException('ID de paciente incorreto');
			}
			return this.laudoRepository.addLaudo(data);
		} catch (error) {
			throw new BadRequestException('Erro ao criar Laudo', error.message);
		}
	}

	async findAllLaudoPaciente(pacienteId: number) {
		try {
			// const pacienteExistente = await this.pacienteRepository.findPacienteById(pacienteId);
			// if (!pacienteExistente) {
			// 	throw new BadRequestException('ID de paciente incorreto');
			// }
			return this.laudoRepository.findLaudoAllByPacienteId(pacienteId);
		} catch (error) {
			throw new BadRequestException('Erro ao encontrar laudos do paciente', error.message);
		}
	}
	// findAll() {
	// 	return `This action returns all laudos`;
	// }
	// findOne(id: number) {
	// 	return `This action returns a #${id} laudo`;
	// }
	// update(id: number, updateLaudoDto: UpdateLaudoDto) {
	// 	return `This action updates a #${id} laudo`;
	// }
	// remove(id: number) {
	// 	return `This action removes a #${id} laudo`;
	// }
}
