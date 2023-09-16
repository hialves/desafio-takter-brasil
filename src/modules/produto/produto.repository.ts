import { Injectable } from '@nestjs/common';
import { Produto } from './entities/produto.entity';
import { CreateProdutoDto } from './dto/create-produto.dto';

@Injectable()
export class ProdutoRepository {
  constructor(private inMemoryDb: Produto[] = []) {}

  create(dto: CreateProdutoDto) {
    const produto = new Produto(dto);
    this.inMemoryDb.push(produto);

    return produto;
  }

  findAll() {
    return this.inMemoryDb;
  }

  findOne(id: string) {
    return this.inMemoryDb.find((item) => item.id === id);
  }
}
