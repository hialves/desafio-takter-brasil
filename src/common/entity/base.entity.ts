import * as dayjs from 'dayjs';
import * as crypto from 'crypto';

export class BaseEntity {
  id: string;
  createdAt: string;

  constructor() {
    this.id = crypto.randomUUID();
    this.createdAt = dayjs().toISOString();
  }
}
