import { ClienteGeneroEnum } from '../entities/cliente.entity';
import { ApiProperty } from '@nestjs/swagger';

export class CreateClienteDto {
  @ApiProperty()
  cpf: string;
  @ApiProperty()
  nome: string;
  @ApiProperty()
  email: string;
  @ApiProperty()
  dataDeNascimento: string;
  @ApiProperty()
  genero: ClienteGeneroEnum;
  @ApiProperty()
  rendaMensal: number;
}
