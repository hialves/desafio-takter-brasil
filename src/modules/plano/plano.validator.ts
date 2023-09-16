import { ContratarPlanoDto } from './dto/contratar-plano.dto';
import { Injectable, NotFoundException } from '@nestjs/common';
import { ProdutoService } from '../produto/produto.service';
import * as dayjs from 'dayjs';
import { ClienteService } from '../cliente/cliente.service';
import { validatorMessages } from 'src/common/messages/validator-messages';

@Injectable()
export class PlanoValidator {
  constructor(
    private produtoService: ProdutoService,
    private clienteService: ClienteService,
  ) {}

  contratar(dto: ContratarPlanoDto): string[] {
    const errors = [];

    const produto = this.produtoService.findOne(dto.idProduto);
    if (!produto)
      throw new NotFoundException(validatorMessages.produto.naoEncontrado);
    const cliente = this.clienteService.findOne(dto.idCliente);
    if (!cliente)
      throw new NotFoundException(validatorMessages.cliente.naoEncontrado);

    const isPeriodInvalid = dayjs(dto.dataDaContratacao).isAfter(
      dayjs(produto.expiracaoDeVenda),
    );
    if (isPeriodInvalid)
      errors.push(validatorMessages.produto.periodoContratacaoExpirado);
    const valueSatisfiesMinimum =
      dto.aporte >= produto.valorMinimoAporteInicial;
    if (valueSatisfiesMinimum)
      errors.push(validatorMessages.produto.aporteAbaixoMinimo);

    const hoje = dayjs(dto.dataDaContratacao);
    const idade = dayjs(cliente.dataDeNascimento).diff(hoje, 'years');
    if (idade < produto.idadeDeEntrada) {
      errors.push(validatorMessages.cliente.idadeMenorQueIdadeMinima);
    } else if (idade < produto.idadeDeSaida) {
      errors.push(validatorMessages.cliente.idadeMaiorQueIdadeMaxima);
    }

    return errors;
  }
}
