import { Controller, Post, Body, Get, Param, NotFoundException, Delete } from '@nestjs/common';
import { PacientesService } from './pacientes.service';
import { CreatePacienteDto } from './dto/create-paciente.dto';

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

	// @Patch(':id')
	// update(@Param('id') id: string, @Body() updatePacienteDto: UpdatePacienteDto) {
	//   return this.pacientesService.update(+id, updatePacienteDto);
	// }

	@Delete(':id')
	remove(@Param('id') id: string) {
		const pacienteId = parseInt(id, 10);
		if (isNaN(pacienteId)) {
			throw new NotFoundException('ID Inválido');
		}
		return this.pacientesService.deletePaciente(pacienteId);
	}
}
