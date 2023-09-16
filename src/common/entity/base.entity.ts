import * as dayjs from 'dayjs';
import * as crypto from 'crypto';
import { ApiProperty } from '@nestjs/swagger';

export class BaseEntity {
  @ApiProperty()
  id: string;
  @ApiProperty()
  createdAt: string;

  constructor() {
    this.id = crypto.randomUUID();
    this.createdAt = dayjs().toISOString();
  }
}
