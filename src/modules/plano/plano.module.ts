import { Module } from '@nestjs/common';
import { PlanoService } from './plano.service';
import { PlanoController } from './plano.controller';
import { ProdutoModule } from '../produto/produto.module';
import { PlanoValidator } from './plano.validator';
import { PlanoRepository } from './plano.repository';
import { ClienteModule } from '../cliente/cliente.module';
import { PlanoData } from 'src/db/plano.data';

@Module({
  imports: [ProdutoModule, ClienteModule],
  controllers: [PlanoController],
  providers: [
    PlanoService,
    PlanoValidator,
    { provide: PlanoRepository, useValue: new PlanoRepository(PlanoData) },
  ],
  exports: [PlanoService],
})
export class PlanoModule {}
