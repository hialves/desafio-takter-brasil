import { Module } from '@nestjs/common';
import { ClienteService } from './cliente.service';
import { ClienteController } from './cliente.controller';
import { ClienteRepository } from './cliente.repository';
import { ClienteValidator } from './cliente.validator';
import { ClienteData } from 'src/db/cliente.data';

@Module({
  controllers: [ClienteController],
  providers: [
    ClienteService,
    ClienteValidator,
    {
      provide: ClienteRepository,
      useValue: new ClienteRepository(ClienteData),
    },
  ],
  exports: [ClienteService],
})
export class ClienteModule {}
