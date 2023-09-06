import * as enums from '../utils/enums/Contato'

class Contato {
  nome: string
  prioridade: enums.Prioridade
  info: string
  id: number

  constructor(
    nome: string,
    prioridade: enums.Prioridade,
    info: string,
    id: number
  ) {
    this.nome = nome
    this.prioridade = prioridade
    this.info = info
    this.id = id
  }
}

export default Contato
