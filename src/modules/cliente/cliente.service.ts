import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { ClienteValidator } from './cliente.validator';
import { ClienteRepository } from './cliente.repository';
import { Cliente } from './entities/cliente.entity';

@Injectable()
export class ClienteService {
  constructor(
    private clienteValidator: ClienteValidator,
    private clienteRepository: ClienteRepository,
  ) {}

  create(dto: CreateClienteDto): Cliente {
    const errors = this.clienteValidator.create(dto);
    if (errors.length) throw new BadRequestException(errors);

    return this.clienteRepository.create(dto);
  }

  findAll() {
    return this.clienteRepository.findAll();
  }

  findOne(id: string) {
    return this.clienteRepository.findOne(id);
  }

  update(id: string, data: Partial<Cliente>) {
    return this.clienteRepository.update(id, data);
  }
}
