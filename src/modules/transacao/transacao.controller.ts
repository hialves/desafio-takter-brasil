import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { TransacaoService } from './transacao.service';
import { CreateResponse } from 'src/common/response/create.response';
import { AportarDto } from './dto/aportar.dto';
import { ResgatarDto } from './dto/resgatar.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Transação')
@Controller('transacao')
export class TransacaoController {
  constructor(private readonly transacaoService: TransacaoService) {}

  @Post('aporte')
  aportar(@Body() dto: AportarDto) {
    const result = this.transacaoService.aportar(dto);
    return new CreateResponse(result);
  }

  @Post('resgate')
  resgatar(@Body() dto: ResgatarDto) {
    const result = this.transacaoService.resgatar(dto);
    return new CreateResponse(result);
  }

  @Get()
  findAll() {
    return this.transacaoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.transacaoService.findOne(id);
  }
}
