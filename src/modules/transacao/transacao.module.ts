import { Module } from '@nestjs/common';
import { TransacaoService } from './transacao.service';
import { TransacaoController } from './transacao.controller';
import { ProdutoModule } from '../produto/produto.module';
import { TransacaoValidator } from './transacao.validator';
import { TransacaoRepository } from './transacao.repository';
import { PlanoModule } from '../plano/plano.module';

@Module({
  imports: [ProdutoModule, PlanoModule],
  controllers: [TransacaoController],
  providers: [
    TransacaoService,
    TransacaoValidator,
    { provide: TransacaoRepository, useValue: [] },
  ],
})
export class TransacaoModule {}
