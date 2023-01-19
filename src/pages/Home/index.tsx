import { Play } from 'phosphor-react'
import {
  CountDownButton,
  FormContainer,
  HomeContainer,
  MinutesAmountInput,
  Separator,
  TextInput,
  TimerContainer,
} from './styles'

export default function Home() {
  return (
    <HomeContainer>
      <form action="">
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <TextInput
            placeholder="Dê um nome para a atividade"
            type="text"
            id="task"
          />

          <label htmlFor="taskDuration">durante</label>
          <MinutesAmountInput
            placeholder="00"
            type="text"
            id="taskDuration"
            step={5}
          />

          <span>minutos.</span>
        </FormContainer>

        <TimerContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </TimerContainer>

        <CountDownButton disabled type="submit">
          <Play size={24} />
          Começar
        </CountDownButton>
      </form>
    </HomeContainer>
  )
}
