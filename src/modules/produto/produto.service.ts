import { Injectable, BadRequestException } from '@nestjs/common';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { ProdutoValidator } from './produto.validator';
import { ProdutoRepository } from './produto.repository';
import { Produto } from './entities/produto.entity';

@Injectable()
export class ProdutoService {
  constructor(
    private produtoValidator: ProdutoValidator,
    private produtoRepository: ProdutoRepository,
  ) {}

  create(dto: CreateProdutoDto): Produto {
    const errors = this.produtoValidator.create(dto);
    if (errors.length) throw new BadRequestException(errors);

    return this.produtoRepository.create(dto);
  }

  findAll() {
    return this.produtoRepository.findAll();
  }

  findOne(id: string) {
    return this.produtoRepository.findOne(id);
  }

  update(id: string, data: Partial<Produto>) {
    return this.produtoRepository.update(id, data);
  }
}
