import { ApiProperty } from '@nestjs/swagger';
import { BaseEntity } from 'src/common/entity/base.entity';

export class Produto extends BaseEntity {
  @ApiProperty()
  nome: string;
  @ApiProperty()
  susep: string;
  @ApiProperty()
  expiracaoDeVenda: string;
  @ApiProperty()
  valorMinimoAporteInicial: number;
  @ApiProperty()
  valorMinimoAporteExtra: number;
  @ApiProperty()
  idadeDeEntrada: number;
  @ApiProperty()
  idadeDeSaida: number;
  @ApiProperty()
  carenciaInicialDeResgate: number;
  @ApiProperty()
  carenciaEntreResgates: number;

  constructor(produto: Partial<Omit<Produto, keyof BaseEntity>>) {
    super();
    this.nome = produto.nome;
    this.susep = produto.susep;
    this.expiracaoDeVenda = produto.expiracaoDeVenda;
    this.valorMinimoAporteInicial = produto.valorMinimoAporteInicial;
    this.valorMinimoAporteExtra = produto.valorMinimoAporteExtra;
    this.idadeDeEntrada = produto.idadeDeEntrada;
    this.idadeDeSaida = produto.idadeDeSaida;
    this.carenciaInicialDeResgate = produto.carenciaInicialDeResgate;
    this.carenciaEntreResgates = produto.carenciaEntreResgates;
  }
}
