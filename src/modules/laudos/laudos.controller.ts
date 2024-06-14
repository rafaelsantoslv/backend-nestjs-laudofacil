import { Controller, Post, Body, Get, Param, ParseIntPipe } from '@nestjs/common';
import { LaudosService } from './laudos.service';
import { CreateLaudoDto } from './dto/create-laudo.dto';
// import { CreateLaudoDto } from './dto/create-laudo.dto';
// import { UpdateLaudoDto } from './dto/update-laudo.dto';

@Controller('laudos')
export class LaudosController {
	constructor(private readonly laudosService: LaudosService) {}

	@Post()
	create(@Body() createLaudoDto: CreateLaudoDto) {
		return this.laudosService.createLaudo(createLaudoDto);
	}

	@Get(':pacienteId')
	findAll(@Param('pacienteId', ParseIntPipe) id: number) {
		return this.laudosService.findAllLaudoPaciente(id);
	}

	@Get('/mostralaudo/:laudoId')
	findOne(@Param('laudoId', ParseIntPipe) laudoId: number) {
		return this.laudosService.findOneLaudoPaciente(laudoId);
	}

	// @Get(':id')
	// findOne(@Param('id') id: string) {
	// 	return this.laudosService.findOne(+id);
	// }

	// @Patch(':id')
	// update(@Param('id') id: string, @Body() updateLaudoDto: UpdateLaudoDto) {
	// 	return this.laudosService.update(+id, updateLaudoDto);
	// }

	// @Delete(':id')
	// remove(@Param('id') id: string) {
	// 	return this.laudosService.remove(+id);
	// }
}
