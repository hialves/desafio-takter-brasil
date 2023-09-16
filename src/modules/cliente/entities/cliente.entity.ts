import { ApiProperty } from '@nestjs/swagger';
import { BaseEntity } from 'src/common/entity/base.entity';

export enum ClienteGeneroEnum {
  Masculino = 'Masculino',
  Feminino = 'Feminino',
  Outros = 'Outros',
}

export class Cliente extends BaseEntity {
  @ApiProperty()
  cpf: string;
  @ApiProperty()
  nome: string;
  @ApiProperty()
  email: string;
  @ApiProperty()
  dataDeNascimento: string;
  @ApiProperty()
  genero: ClienteGeneroEnum;
  @ApiProperty()
  rendaMensal: number;

  constructor(cliente: Partial<Omit<Cliente, keyof BaseEntity>>) {
    super();
    this.cpf = cliente.cpf;
    this.nome = cliente.nome;
    this.email = cliente.email;
    this.dataDeNascimento = cliente.dataDeNascimento;
    this.genero = cliente.genero;
    this.rendaMensal = cliente.rendaMensal;
  }
}
