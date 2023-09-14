import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClienteModule } from './cliente/cliente.module';
import { ProdutoModule } from './produto/produto.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
