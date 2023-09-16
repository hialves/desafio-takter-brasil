import { Injectable, NotFoundException, OnModuleInit } from '@nestjs/common';
import { ProdutoService } from '../produto/produto.service';
import { AportarDto } from './dto/aportar.dto';
import { PlanoService } from '../plano/plano.service';
import { ResgatarDto } from './dto/resgatar.dto';
import { validatorMessages } from 'src/common/messages/validator-messages';
import { TransacaoService } from './transacao.service';
import { ModuleRef } from '@nestjs/core';
import * as dayjs from 'dayjs';
import { Produto } from '../produto/entities/produto.entity';
import { Plano } from '../plano/entities/plano.entity';
import { OperationEnum } from './entities/transacao.entity';

@Injectable()
export class TransacaoValidator implements OnModuleInit {
  private transacaoService: TransacaoService;

  constructor(
    private produtoService: ProdutoService,
    private planoService: PlanoService,
    private moduleRef: ModuleRef,
  ) {}

  onModuleInit() {
    this.transacaoService = this.moduleRef.get(TransacaoService);
  }

  aportar(dto: AportarDto): string[] {
    const errors = [];

    // Existência do registro
    const plano = this.planoService.findOne(dto.idPlano);
    if (!plano) throw new NotFoundException();
    const produto = this.produtoService.findOne(plano.idProduto);
    if (!produto) throw new NotFoundException();

    // Plano cancelado
    if (this.planoService.isCancelled(dto.idPlano))
      errors.push(validatorMessages.plano.cancelled);
    // Valor de aporte maior que 0
    if (dto.valorAporte <= 0) errors.push(validatorMessages.greatherThanZero);
    // Aporte extra mínimo
    const valueSatisfiesMinimum =
      dto.valorAporte >= produto.valorMinimoAporteExtra;
    if (valueSatisfiesMinimum)
      errors.push(validatorMessages.produto.aporteBelowMinimum);

    return errors;
  }

  resgatar(dto: ResgatarDto): string[] {
    const errors = [];

    // Existência do registro
    const plano = this.planoService.findOne(dto.idPlano);
    if (!plano) throw new NotFoundException();
    const produto = this.produtoService.findOne(plano.idProduto);
    if (!produto) throw new NotFoundException();

    // Plano cancelado
    if (this.planoService.isCancelled(dto.idPlano))
      errors.push(validatorMessages.plano.cancelled);
    // Valor de resgate maior que 0
    if (dto.valorResgate <= 0) errors.push(validatorMessages.greatherThanZero);
    // Saldo insuficiente
    if (plano.aporte < dto.valorResgate)
      errors.push(validatorMessages.plano.insufficientFunds);
    // Carência
    errors.push(...this.carencia(produto, plano));

    return errors;
  }

  private carencia(produto: Produto, plano: Plano): string[] {
    const errors = [];
    const transacoes = this.transacaoService.findByIdCliente(plano.idCliente);
    // Carência de resgates - inicial
    if (!transacoes.length) {
      errors.push(
        ...this.verificarCarencia(
          plano.dataDaContratacao,
          produto.carenciaInicialDeResgate,
        ),
      );
    } else {
      // Carência de resgates - entre resgates
      const ultimaTransacaoResgate = transacoes
        .sort(
          (a, b) =>
            dayjs(b.createdAt).millisecond() - dayjs(a.createdAt).millisecond(),
        )
        .find((item) => item.operation === OperationEnum.RESGATE);

      // Nunca houve operação de resgate
      if (!ultimaTransacaoResgate) {
        errors.push(
          ...this.verificarCarencia(
            plano.dataDaContratacao,
            produto.carenciaInicialDeResgate,
          ),
        );
      } else {
        // Checa a última operação de resgate e a quantidade de dias
        errors.push(
          ...this.verificarCarencia(
            ultimaTransacaoResgate.createdAt,
            produto.carenciaEntreResgates,
          ),
        );
      }
    }

    return errors;
  }

  private verificarCarencia(
    dataAValidar: string,
    diasDeCarencia: number,
  ): string[] {
    const errors = [];

    const dataContratacaoCarencia = dayjs(dataAValidar).add(
      diasDeCarencia,
      'day',
    );
    const now = dayjs();
    // Carência em vigência
    if (now.isBefore(dataContratacaoCarencia)) {
      errors.push(
        validatorMessages.transacao.carenciaEmVigencia(
          dataContratacaoCarencia.format('DD/MM/YYYY'),
        ),
      );
    }

    return errors;
  }
}
