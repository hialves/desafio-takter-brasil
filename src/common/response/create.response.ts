import { BaseEntity } from '../entity/base.entity';
import { ApiProperty } from '@nestjs/swagger';

export class CreateResponse {
  @ApiProperty()
  id: string;
  constructor(entity: BaseEntity) {
    this.id = entity.id;
  }
}
