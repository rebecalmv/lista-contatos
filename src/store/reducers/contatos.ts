import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/Contato'
import * as enums from '../../utils/enums/Contato'

type ContatosState = {
  itens: Contato[]
}

const initialState: ContatosState = {
  itens: [
    {
      id: 1,
      nome: 'Mãe',
      prioridade: enums.Prioridade.FAMILIA,
      info: '021991336551'
    },
    {
      id: 2,
      nome: 'Matheus',
      prioridade: enums.Prioridade.AMIGOS,
      info: '021983629576'
    },
    {
      id: 3,
      nome: 'Thiago',
      prioridade: enums.Prioridade.TRABALHO,
      info: '021979016733'
    },
    {
      id: 4,
      nome: 'Luisa',
      prioridade: enums.Prioridade.AMIGOS,
      info: '021987352374'
    },
    {
      id: 5,
      nome: 'Pai',
      prioridade: enums.Prioridade.FAMILIA,
      info: '021993138832'
    },
    {
      id: 6,
      nome: 'Aline',
      prioridade: enums.Prioridade.TRABALHO,
      info: '021975428967'
    }
  ]
}

const contatosSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    excluir: (state, action: PayloadAction<number>) => {
      state.itens = [
        ...state.itens.filter((contato) => contato.id !== action.payload)
      ]
    },
    editar: (state, action: PayloadAction<Contato>) => {
      const indexDaTarefa = state.itens.findIndex(
        (c) => c.id === action.payload.id
      )
      if (indexDaTarefa >= 0) {
        state.itens[indexDaTarefa] = action.payload
      }
    },
    cadastrar: (state, action: PayloadAction<Omit<Contato, 'id'>>) => {
      const contatoJaExiste = state.itens.find(
        (contato) =>
          contato.nome.toLowerCase() === action.payload.nome.toLowerCase()
      )
      if (contatoJaExiste) {
        alert('Já existe um contato com esse nome')
      } else {
        const ultimoContato = state.itens[state.itens.length - 1]

        const contatoNovo = {
          ...action.payload,
          id: ultimoContato ? ultimoContato.id + 1 : 1
        }
        state.itens.push(contatoNovo)
      }
    }
  }
})

export const { excluir, editar, cadastrar } = contatosSlice.actions

export default contatosSlice.reducer
