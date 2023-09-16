import { BadRequestException, Injectable } from '@nestjs/common';
import { ContratarPlanoDto } from './dto/contratar-plano.dto';
import { PlanoRepository } from './plano.repository';
import { PlanoValidator } from './plano.validator';
import { Plano } from './entities/plano.entity';

@Injectable()
export class PlanoService {
  constructor(
    private planoValidator: PlanoValidator,
    private planoRepository: PlanoRepository,
  ) {}

  contratar(dto: ContratarPlanoDto): Plano {
    const errors = this.planoValidator.contratar(dto);
    if (errors.length) throw new BadRequestException(errors);
    const entity = new Plano(dto);
    const result = this.planoRepository.create(entity);

    return result;
  }

  findAll(): Plano[] {
    return this.planoRepository.findAll();
  }

  findOne(id: string): Plano {
    return this.planoRepository.findOne(id);
  }

  isCancelled(id: string): boolean {
    const plano = this.findOne(id);
    return plano.aporte <= 0;
  }

  updateAporte(id: string, value: number): Plano {
    return this.planoRepository.updateAporte(id, value);
  }
}
