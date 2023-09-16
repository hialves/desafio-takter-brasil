import { ApiProperty } from '@nestjs/swagger';

export class ContratarPlanoDto {
  @ApiProperty()
  idCliente: string;
  @ApiProperty()
  idProduto: string;
  @ApiProperty()
  aporte: number;
  @ApiProperty()
  dataDaContratacao: string;
  @ApiProperty()
  idadeDeAposentadoria: number;
}
