import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { TransacaoService } from './transacao.service';
import { CreateResponse } from 'src/common/response/create.response';
import { AportarDto } from './dto/aportar.dto';
import { ResgatarDto } from './dto/resgatar.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { Transacao } from './entities/transacao.entity';

@ApiTags('Transação')
@Controller('transacao')
export class TransacaoController {
  constructor(private readonly transacaoService: TransacaoService) {}

  @ApiResponse({ type: CreateResponse })
  @Post('aporte')
  aportar(@Body() dto: AportarDto) {
    const result = this.transacaoService.aportar(dto);
    return new CreateResponse(result);
  }

  @ApiResponse({ type: CreateResponse })
  @Post('resgate')
  resgatar(@Body() dto: ResgatarDto) {
    const result = this.transacaoService.resgatar(dto);
    return new CreateResponse(result);
  }

  @ApiResponse({ type: [Transacao] })
  @Get()
  findAll() {
    return this.transacaoService.findAll();
  }

  @ApiResponse({ type: Transacao })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.transacaoService.findOne(id);
  }
}
