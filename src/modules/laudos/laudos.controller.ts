import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LaudosService } from './laudos.service';
// import { CreateLaudoDto } from './dto/create-laudo.dto';
// import { UpdateLaudoDto } from './dto/update-laudo.dto';

@Controller('laudos')
export class LaudosController {
	constructor(private readonly laudosService: LaudosService) {}

	// @Post()
	// create(@Body() createLaudoDto: CreateLaudoDto) {
	// 	return this.laudosService.create(createLaudoDto);
	// }

	// @Get()
	// findAll() {
	// 	return this.laudosService.findAll();
	// }

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
