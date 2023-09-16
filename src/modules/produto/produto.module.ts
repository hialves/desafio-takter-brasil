import { Module } from '@nestjs/common';
import { ProdutoService } from './produto.service';
import { ProdutoController } from './produto.controller';
import { ProdutoValidator } from './produto.validator';
import { ProdutoRepository } from './produto.repository';

@Module({
  controllers: [ProdutoController],
  providers: [
    ProdutoService,
    ProdutoValidator,
    { provide: ProdutoRepository, useValue: [] },
  ],
  exports: [ProdutoService],
})
export class ProdutoModule {}
