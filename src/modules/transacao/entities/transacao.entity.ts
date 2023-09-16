import { BaseEntity } from 'src/common/entity/base.entity';

export enum OperationEnum {
  RESGATE = 'RESGATE',
  APORTE = 'APORTE',
}

export class Transacao extends BaseEntity {
  idCliente: string;
  idPlano: string;
  value: number;
  operation: OperationEnum;

  constructor(transacao: Partial<Transacao>) {
    super();
    this.idCliente = transacao.idCliente;
    this.idPlano = transacao.idPlano;
    this.value = transacao.value;
    this.operation = transacao.operation;
  }
}
