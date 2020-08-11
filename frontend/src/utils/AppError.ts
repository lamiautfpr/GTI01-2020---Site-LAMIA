export default class AppError {
  public readonly mensagem: string;

  public readonly codigoStatus: number;

  constructor(mensagem: string, codigoStatus = 400) {
    this.mensagem = mensagem;
    this.codigoStatus = codigoStatus;
  }
}
