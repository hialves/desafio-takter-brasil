import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ClienteService } from './cliente.service';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { CreateResponse } from 'src/common/response/create.response';
import { ApiTags, ApiResponse } from '@nestjs/swagger';
import { Cliente } from './entities/cliente.entity';

@ApiTags('Cliente')
@Controller('cliente')
export class ClienteController {
  constructor(private readonly clienteService: ClienteService) {}

  @ApiResponse({ type: CreateResponse })
  @Post()
  create(@Body() dto: CreateClienteDto) {
    const result = this.clienteService.create(dto);
    return new CreateResponse(result);
  }

  @ApiResponse({ type: [Cliente] })
  @Get()
  findAll() {
    return this.clienteService.findAll();
  }

  @ApiResponse({ type: Cliente })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.clienteService.findOne(id);
  }
}
