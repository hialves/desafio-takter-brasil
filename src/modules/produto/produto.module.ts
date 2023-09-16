import { Module } from '@nestjs/common';
import { ProdutoService } from './produto.service';
import { ProdutoController } from './produto.controller';
import { ProdutoValidator } from './produto.validator';
import { ProdutoRepository } from './produto.repository';
import { ProdutoData } from 'src/db/product.data';

@Module({
  controllers: [ProdutoController],
  providers: [
    ProdutoService,
    ProdutoValidator,
    {
      provide: ProdutoRepository,
      useValue: new ProdutoRepository(ProdutoData),
    },
  ],
  exports: [ProdutoService],
})
export class ProdutoModule {}
