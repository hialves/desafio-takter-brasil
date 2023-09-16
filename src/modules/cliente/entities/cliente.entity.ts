import { BaseEntity } from 'src/common/entity/base.entity';

export enum ClienteGeneroEnum {
  Masculino = 'Masculino',
  Feminino = 'Feminino',
  Outros = 'Outros',
}

export class Cliente extends BaseEntity {
  id: string;
  cpf: string;
  nome: string;
  email: string;
  dataDeNascimento: string;
  genero: ClienteGeneroEnum;
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
