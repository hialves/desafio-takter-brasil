import { BaseEntity } from 'src/common/entity/base.entity';

export class Plano extends BaseEntity {
  idCliente: string;
  idProduto: string;
  aporte: number;
  dataDaContratacao: string;
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
