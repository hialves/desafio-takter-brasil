import * as dayjs from 'dayjs';

export class BaseEntity {
  id: string;
  createdAt: string;

  constructor() {
    this.id = crypto.randomUUID();
    this.createdAt = dayjs().toISOString();
  }
}
