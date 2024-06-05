import { Injectable } from '@nestjs/common';
import { CreatePacienteDto } from './dto/create-paciente.dto';
import { Paciente } from './interfaces/paciente-interface';
import { PacienteRepository } from './repositories/paciente.repository';

@Injectable()
export class PacientesService {
  constructor(private readonly pacienteRepository: PacienteRepository) {}
  async createPaciente(createPaciente: CreatePacienteDto): Promise<Paciente> {
    return this.pacienteRepository.addPaciente(createPaciente);
  }
}
