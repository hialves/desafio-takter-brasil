import { ContratarPlanoDto } from './dto/contratar-plano.dto';
import { Injectable } from '@nestjs/common';
import { ProdutoService } from '../produto/produto.service';
import * as dayjs from 'dayjs';

@Injectable()
export class PlanoValidator {
  constructor(private produtoService: ProdutoService) {}

  contratar(dto: ContratarPlanoDto): string[] {
    const errors = [];

    const produto = this.produtoService.findOne(dto.idProduto);
    const isPeriodInvalid = dayjs(dto.dataDaContratacao).isAfter(
      dayjs(produto.expiracaoDeVenda),
    );
    if (isPeriodInvalid) errors.push('O período de contratação já encerrou');
    const valueSatisfiesMinimum =
      dto.aporte >= produto.valorMinimoAporteInicial;
    if (valueSatisfiesMinimum)
      errors.push('O valor de aporte está abaixo do valor mínimo');

    return errors;
  }
}
