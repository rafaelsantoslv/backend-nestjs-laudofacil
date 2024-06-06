import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Paciente } from '../interfaces/paciente-interface';
import { CreatePacienteDto } from '../dto/create-paciente.dto';

@Injectable()
export class PacienteRepository {
  constructor(private readonly prisma: PrismaService) {}

  async addPaciente(createPaciente: CreatePacienteDto): Promise<Paciente | null> {
    return this.prisma.pacientes.create({
      data: {
        nome: createPaciente.nome,
        sobrenome: createPaciente.sobrenome,
        cpf: createPaciente.cpf,
        dataNascimento: createPaciente.dataNascimento,
        sexo: createPaciente.sexo,
        email: createPaciente.email,
        telefone: createPaciente.telefone,
        enderecoId: createPaciente.enderecoId,
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
}
