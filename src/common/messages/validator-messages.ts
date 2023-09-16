export const validatorMessages = {
  cliente: {
    cpfAlreadyExists: 'Já existe um cliente cadastrado com esse CPF',
    emailAlreadyExists: 'Já existe um cliente cadastrado com esse email',
    idadeMenorQueIdadeMinima:
      'O cliente não possui idade suficiente para adquirir o plano',
    idadeMaiorQueIdadeMaxima:
      'O cliente possui idade maior que a idade máxima para adquirir o plano',
    naoEncontrado: 'Cliente não encontrado',
  },
  produto: {
    entryGreatherThanLeave:
      'A idade de entrada deve ser menor que a idade de saída',
    aporteAbaixoMinimo: 'O valor de aporte está abaixo do valor mínimo',
    periodoContratacaoExpirado: 'O período de contratação já encerrou',
    naoEncontrado: 'Produto não encontrado',
  },
  plano: {
    cancelled: 'O plano está cancelado',
    insufficientFunds: 'Saldo insuficiente',
    naoEncontrado: 'Plano não encontrado',
  },
  transacao: {
    carenciaEmVigencia: (value: string) =>
      `Ainda não é possível resgatar devido à carência do plano. Tente novamente após ${value}`,
  },
  greatherThanZero: 'Informe um valor maior que zero',
};
