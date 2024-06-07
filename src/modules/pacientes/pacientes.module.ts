import { Module } from '@nestjs/common';
import { PacientesService } from './pacientes.service';
import { PacientesController } from './pacientes.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PacienteRepository } from './repositories/paciente.repository';

@Module({
	imports: [PrismaModule],
	controllers: [PacientesController],
	providers: [PacientesService, PacienteRepository],
})
export class PacientesModule {}
