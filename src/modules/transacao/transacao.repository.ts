import { Injectable } from '@nestjs/common';
import { Transacao } from './entities/transacao.entity';

@Injectable()
export class TransacaoRepository {
  // Poderia usar Map também para armazenar os valores
  constructor(private inMemoryDb: Transacao[] = []) {}

  create(plano: Transacao) {
    this.inMemoryDb.push(plano);

    return plano;
  }

  findAll() {
    return this.inMemoryDb;
  }

  findOne(id: string) {
    return this.inMemoryDb.find((item) => item.id === id);
  }

  findByClienteAndProduto(
    filter: Pick<Transacao, 'idPlano' | 'idCliente'>,
  ): Transacao | undefined {
    return this.inMemoryDb.find(
      (item) =>
        item.idPlano === filter.idPlano && item.idCliente === filter.idCliente,
    );
  }

  update(
    filter: Pick<Transacao, 'idPlano' | 'idCliente'>,
    data: Partial<Transacao>,
  ) {
    const index = this.inMemoryDb.findIndex(
      (item) =>
        item.idPlano === filter.idPlano && item.idCliente === filter.idCliente,
    );
    if (index < 0) return null;

    Object.assign(this.inMemoryDb[index], {
      ...this.inMemoryDb[index],
      ...data,
    });

    return this.inMemoryDb[index];
  }
}
