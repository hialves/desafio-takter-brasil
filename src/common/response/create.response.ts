import { BaseEntity } from '../entity/base.entity';

export class CreateResponse {
  id: string;
  constructor(entity: BaseEntity) {
    this.id = entity.id;
  }
}
