import { BadRequestException, Injectable } from '@nestjs/common';
import { TransacaoRepository } from './transacao.repository';
import { TransacaoValidator } from './transacao.validator';
import { OperationEnum, Transacao } from './entities/transacao.entity';
import { AportarDto } from './dto/aportar.dto';
import { ResgatarDto } from './dto/resgatar.dto';
import { PlanoService } from '../plano/plano.service';

@Injectable()
export class TransacaoService {
  constructor(
    private transacaoValidator: TransacaoValidator,
    private transacaoRepository: TransacaoRepository,
    private planoService: PlanoService,
  ) {}

  findAll(): Transacao[] {
    return this.transacaoRepository.findAll();
  }

  findByIdCliente(idCliente: string) {
    return this.findAll().filter((item) => item.idCliente === idCliente);
  }

  findOne(id: string): Transacao | null {
    return this.transacaoRepository.findOne(id);
  }

  aportar(dto: AportarDto): Transacao {
    const errors = this.transacaoValidator.aportar(dto);
    if (errors.length) throw new BadRequestException(errors);

    const entity = new Transacao({
      ...dto,
      value: dto.valorAporte,
      operation: OperationEnum.APORTE,
    });
    const result = this.transacaoRepository.create(entity);
    this.planoService.updateAporte(dto.idPlano, dto.valorAporte);
    return result;
  }

  resgatar(dto: ResgatarDto): Transacao {
    const errors = this.transacaoValidator.resgatar(dto);
    if (errors.length) throw new BadRequestException(errors);

    const entity = new Transacao({
      ...dto,
      value: dto.valorResgate,
      operation: OperationEnum.RESGATE,
    });
    const result = this.transacaoRepository.create(entity);
    const negativeValue = Math.abs(dto.valorResgate) * -1;
    this.planoService.updateAporte(dto.idPlano, negativeValue);

    return result;
  }
}
