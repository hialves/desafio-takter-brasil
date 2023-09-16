import { BaseEntity } from 'src/common/entity/base.entity';

export class Produto extends BaseEntity {
  nome: string;
  susep: string;
  expiracaoDeVenda: string;
  valorMinimoAporteInicial: number; // valor mínimo de aporte no momento da contração
  valorMinimoAporteExtra: number; // valor mínimo do aporte extra
  idadeDeEntrada: number; // idade mínima para comprar o produto
  idadeDeSaida: number; // idade máxima para começar a usufruir do benefício
  carenciaInicialDeResgate: number; // em dias - carência para realizar o primeiro resgate
  carenciaEntreResgates: number; // em dias - carência para realizar outro resgate após

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
