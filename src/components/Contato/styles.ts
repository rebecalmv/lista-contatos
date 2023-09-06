import styled from 'styled-components'
import { Botao } from '../../styles'
import variaveis from '../../styles/variaveis'

import * as enums from '../../utils/enums/Contato'

type TagProps = {
  prioridade?: enums.Prioridade
}

function retornaCorDeFundo(props: TagProps): string {
  if (props.prioridade === enums.Prioridade.FAMILIA) return variaveis.rosa
  if (props.prioridade === enums.Prioridade.AMIGOS) return variaveis.azul
  return variaveis.amarelo
}

export const Card = styled.div`
  background-color: #fcfcfc;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 16px;
  margin-bottom: 32px;
  border-radius: 16px;
`

export const Nome = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 16px;
`
export const Tag = styled.span<TagProps>`
  padding: 4px 8px;
  font-size: 10px;
  font-weight: bold;
  color: #fff;
  background-color: ${(props) => retornaCorDeFundo(props)};
  border-radius: 8px;
  display: inline-block;
`

export const Info = styled.textarea`
  color: #8b8b8b;
  font-size: 14px;
  line-height: 24px;
  font-family: Roboto Mono, monospace;
  display: block;
  width: 50%;
  margin-bottom: 15px;
  margin-top: 16px;
  resize: none;
  border: none;
  background-color: transparent;
`

export const BarraAcoes = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 16px;
`

export const BotaoCancelarExcluir = styled(Botao)`
  background-color: ${variaveis.vermelho};
`
