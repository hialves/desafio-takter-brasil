export const validatorMessages = {
  cliente: {
    cpfAlreadyExists: 'Já existe um cliente cadastrado com esse CPF',
    emailAlreadyExists: 'Já existe um cliente cadastrado com esse email',
  },
  produto: {
    entryGreatherThanLeave:
      'A idade de entrada deve ser menor que a idade de saída',
    aporteBelowMinimum: 'O valor de aporte está abaixo do valor mínimo',
  },
  plano: {
    cancelled: 'O plano está cancelado',
    insufficientFunds: 'Saldo insuficiente',
  },
  transacao: {
    carenciaEmVigencia: (value: string) =>
      `Ainda não é possível resgatar devido à carência do plano. Tente novamente após ${value}`,
  },
  greatherThanZero: 'Informe um valor maior que zero',
};
