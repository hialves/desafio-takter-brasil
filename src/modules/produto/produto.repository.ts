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

  update(id: string, data: Partial<Produto>) {
    const index = this.inMemoryDb.findIndex((item) => item.id === id);
    if (index < 0) return null;

    Object.assign(this.inMemoryDb[index], {
      ...this.inMemoryDb[index],
      ...data,
    });

    return this.inMemoryDb[index];
  }
}
