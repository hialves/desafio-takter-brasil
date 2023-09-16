import { ClienteRepository } from './cliente.repository';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { Injectable } from '@nestjs/common';
import { validatorMessages } from 'src/common/messages/validator-messages';

@Injectable()
export class ClienteValidator {
  constructor(private clienteRepository: ClienteRepository) {}

  create(dto: CreateClienteDto): string[] {
    const errors = [];
    const existsCpf = this.clienteRepository.findByCpf(dto.cpf);
    if (existsCpf) errors.push(validatorMessages.cliente.cpfAlreadyExists);

    const existsEmail = this.clienteRepository.findByEmail(dto.email);
    if (existsEmail) errors.push(validatorMessages.cliente.emailAlreadyExists);

    return errors;
  }
}
