import { Module } from '@nestjs/common';
import { PlanoService } from './plano.service';
import { PlanoController } from './plano.controller';
import { ProdutoModule } from '../produto/produto.module';
import { PlanoValidator } from './plano.validator';
import { PlanoRepository } from './plano.repository';

@Module({
  imports: [ProdutoModule],
  controllers: [PlanoController],
  providers: [
    PlanoService,
    PlanoValidator,
    { provide: PlanoRepository, useValue: [] },
  ],
  exports: [PlanoService],
})
export class PlanoModule {}
