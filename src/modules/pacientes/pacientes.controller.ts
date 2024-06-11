import { Controller, Post, Body, Get, Param, NotFoundException, Delete, Patch } from '@nestjs/common';
import { PacientesService } from './pacientes.service';
import { CreatePacienteDto, UpdatePacienteDto } from './dto/create-paciente.dto';

@Controller('pacientes')
export class PacientesController {
	constructor(private readonly pacientesService: PacientesService) {}

	@Post()
	create(@Body() createPacienteDto: CreatePacienteDto) {
		return this.pacientesService.createPaciente(createPacienteDto);
	}

	@Get()
	findAll() {
		return this.pacientesService.findAllPaciente();
	}

	@Get(':id')
	findOne(@Param('id') id: string) {
		const pacienteId = parseInt(id, 10);
		if (isNaN(pacienteId)) {
			throw new NotFoundException('ID Inválido');
		}
		return this.pacientesService.findOnePaciente(pacienteId);
	}

	@Patch(':id')
	update(@Param('id') id: string, @Body() data: UpdatePacienteDto) {
		const pacienteId = parseInt(id, 10);
		if (isNaN(pacienteId)) {
			throw new NotFoundException('ID Inválido');
		}
		return this.pacientesService.updatePaciente(pacienteId, data);
	}

	@Delete(':id')
	remove(@Param('id') id: string) {
		const pacienteId = parseInt(id, 10);
		if (isNaN(pacienteId)) {
			throw new NotFoundException('ID Inválido');
		}
		return this.pacientesService.deletePaciente(pacienteId);
	}
}
