import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { PlanoService } from './plano.service';
import { ContratarPlanoDto } from './dto/contratar-plano.dto';
import { CreateResponse } from 'src/common/response/create.response';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Plano')
@Controller('plano')
export class PlanoController {
  constructor(private readonly planoService: PlanoService) {}

  @Post('contratar')
  contratar(@Body() dto: ContratarPlanoDto) {
    const result = this.planoService.contratar(dto);
    return new CreateResponse(result);
  }

  @Get()
  findAll() {
    return this.planoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.planoService.findOne(id);
  }
}
