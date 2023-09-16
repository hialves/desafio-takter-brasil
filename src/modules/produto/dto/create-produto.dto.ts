import { ApiProperty } from '@nestjs/swagger';

export class CreateProdutoDto {
  @ApiProperty()
  nome: string;
  @ApiProperty()
  susep: string;
  @ApiProperty()
  expiracaoDeVenda: string;
  @ApiProperty()
  valorMinimoAporteInicial: number;
  @ApiProperty()
  valorMinimoAporteExtra: number;
  @ApiProperty()
  idadeDeEntrada: number;
  @ApiProperty()
  idadeDeSaida: number;
  @ApiProperty()
  carenciaInicialDeResgate: number;
  @ApiProperty()
  carenciaEntreResgates: number;
}
