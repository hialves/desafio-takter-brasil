import { ApiProperty } from '@nestjs/swagger';
import { BaseEntity } from 'src/common/entity/base.entity';

export class Plano extends BaseEntity {
  @ApiProperty()
  idCliente: string;
  @ApiProperty()
  idProduto: string;
  @ApiProperty()
  aporte: number;
  @ApiProperty()
  dataDaContratacao: string;
  @ApiProperty()
  idadeDeAposentadoria: number;

  constructor(plano: Partial<Plano>) {
    super();
    this.idCliente = plano.idCliente;
    this.idProduto = plano.idProduto;
    this.aporte = plano.aporte;
    this.dataDaContratacao = plano.dataDaContratacao;
    this.idadeDeAposentadoria = plano.idadeDeAposentadoria;
  }
}
