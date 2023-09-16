import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { PlanoService } from './plano.service';
import { ContratarPlanoDto } from './dto/contratar-plano.dto';
import { CreateResponse } from 'src/common/response/create.response';
import { ApiTags, ApiResponse } from '@nestjs/swagger';
import { Plano } from './entities/plano.entity';

@ApiTags('Plano')
@Controller('plano')
export class PlanoController {
  constructor(private readonly planoService: PlanoService) {}

  @ApiResponse({ type: CreateResponse })
  @Post('contratar')
  contratar(@Body() dto: ContratarPlanoDto) {
    const result = this.planoService.contratar(dto);
    return new CreateResponse(result);
  }

  @ApiResponse({ type: [Plano] })
  @Get()
  findAll() {
    return this.planoService.findAll();
  }

  @ApiResponse({ type: Plano })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.planoService.findOne(id);
  }
}
