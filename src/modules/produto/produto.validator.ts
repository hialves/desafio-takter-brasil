import { CreateProdutoDto } from './dto/create-produto.dto';
import { Injectable } from '@nestjs/common';
import { validatorMessages } from 'src/common/messages/validator-messages';

@Injectable()
export class ProdutoValidator {
  create(dto: CreateProdutoDto): string[] {
    const errors = [];
    if (dto.idadeDeEntrada > dto.idadeDeSaida)
      errors.push(validatorMessages.produto.entryGreatherThanLeave);

    return errors;
  }
}
