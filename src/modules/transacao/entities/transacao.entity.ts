import { ApiProperty } from '@nestjs/swagger';
import { BaseEntity } from 'src/common/entity/base.entity';

export enum OperationEnum {
  RESGATE = 'RESGATE',
  APORTE = 'APORTE',
}

export class Transacao extends BaseEntity {
  @ApiProperty()
  idCliente: string;
  @ApiProperty()
  idPlano: string;
  @ApiProperty()
  value: number;
  @ApiProperty()
  operation: OperationEnum;

  constructor(transacao: Partial<Transacao>) {
    super();
    this.idCliente = transacao.idCliente;
    this.idPlano = transacao.idPlano;
    this.value = transacao.value;
    this.operation = transacao.operation;
  }
}
