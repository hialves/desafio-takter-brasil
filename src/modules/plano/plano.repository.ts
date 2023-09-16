import { Injectable } from '@nestjs/common';
import { Plano } from './entities/plano.entity';

@Injectable()
export class PlanoRepository {
  // Poderia usar Map também para armazenar os valores
  constructor(private inMemoryDb: Plano[] = []) {}

  create(plano: Plano) {
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
    filter: Pick<Plano, 'id' | 'idCliente'>,
  ): Plano | undefined {
    return this.inMemoryDb.find(
      (item) => item.id === filter.id && item.idCliente === filter.idCliente,
    );
  }

  update(filter: Pick<Plano, 'id'>, data: Partial<Plano>) {
    const index = this.inMemoryDb.findIndex((item) => item.id === filter.id);
    if (index < 0) return null;

    Object.assign(this.inMemoryDb[index], {
      ...this.inMemoryDb[index],
      ...data,
    });

    return this.inMemoryDb[index];
  }

  updateAporte(id: string, value: number) {
    const index = this.inMemoryDb.findIndex((item) => item.id === id);
    if (index < 0) return null;

    Object.assign(this.inMemoryDb[index], {
      ...this.inMemoryDb[index],
      aporte: this.inMemoryDb[index].aporte + value,
    } as Partial<Plano>);

    return this.inMemoryDb[index];
  }
}
