import {
  Cliente,
  ClienteGeneroEnum,
} from 'src/modules/cliente/entities/cliente.entity';

export const ClienteData: Cliente[] = [
  {
    id: '18dfeb91-459a-4bc7-9cdd-d93b41f7bf62',
    cpf: '45645645600',
    nome: 'José da Silva',
    email: 'jose@cliente.com',
    dataDeNascimento: '2010-08-24T12:00:00.000Z',
    genero: ClienteGeneroEnum.Masculino,
    rendaMensal: 2899.5,
    createdAt: '2022-04-05T12:00:00.000Z',
  },
];
