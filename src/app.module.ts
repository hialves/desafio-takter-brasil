import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { ClienteModule } from './modules/cliente/cliente.module';
import { ProdutoModule } from './modules/produto/produto.module';
import { PlanoModule } from './modules/plano/plano.module';
import { TransacaoModule } from './modules/transacao/transacao.module';

@Module({
  imports: [ClienteModule, ProdutoModule, PlanoModule, TransacaoModule],
  providers: [AppService],
})
export class AppModule {}
