import { Module } from '@nestjs/common';
import { LaudosService } from './laudos.service';
import { LaudosController } from './laudos.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { LaudoRepository } from './repositories/laudo.repository';
import { PacienteRepository } from '../pacientes/repositories/paciente.repository';

@Module({
	imports: [PrismaModule],
	controllers: [LaudosController],
	providers: [LaudosService, LaudoRepository, PacienteRepository],
})
export class LaudosModule {}
