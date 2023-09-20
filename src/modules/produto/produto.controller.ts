import { Controller, Get, Post, Body, Param, Patch } from '@nestjs/common';
import { ProdutoService } from './produto.service';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { CreateResponse } from 'src/common/response/create.response';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { Produto } from './entities/produto.entity';
import { UpdateProdutoDto } from './dto/update-produto.dto';

@ApiTags('Produto')
@Controller('produto')
export class ProdutoController {
  constructor(private readonly produtoService: ProdutoService) {}

  @ApiResponse({ type: CreateResponse })
  @Post()
  create(@Body() dto: CreateProdutoDto) {
    const result = this.produtoService.create(dto);
    return new CreateResponse(result);
  }

  @ApiResponse({ type: [Produto] })
  @Get()
  findAll() {
    return this.produtoService.findAll();
  }

  @ApiResponse({ type: Produto })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.produtoService.findOne(id);
  }

  @ApiResponse({ type: Produto })
  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateProdutoDto) {
    return this.produtoService.update(id, dto);
  }
}
