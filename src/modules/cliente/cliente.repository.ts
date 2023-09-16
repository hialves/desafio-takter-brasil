import { Injectable } from '@nestjs/common';
import { Cliente } from './entities/cliente.entity';
import { CreateClienteDto } from './dto/create-cliente.dto';

@Injectable()
export class ClienteRepository {
  constructor(private inMemoryDb: Cliente[] = []) {}

  create(dto: CreateClienteDto) {
    const cliente = new Cliente(dto);
    this.inMemoryDb.push(cliente);

    return cliente;
  }

  findAll() {
    return this.inMemoryDb;
  }

  findOne(id: string) {
    return this.inMemoryDb.find((item) => item.id === id);
  }

  findByCpf(cpf: string): Cliente | undefined {
    return this.inMemoryDb.find((item) => item.cpf === cpf);
  }

  findByEmail(email: string): Cliente | undefined {
    return this.inMemoryDb.find((item) => item.email === email);
  }
}
