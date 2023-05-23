import { Play } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import {
  CountDownButton,
  FormContainer,
  HomeContainer,
  MinutesAmountInput,
  Separator,
  TextInput,
  TimerContainer,
} from './styles'

const formValidationSchema = zod.object({
  task: zod.string().min(1, 'Informe a tarefa.'),
  minutesAmount: zod
    .number()
    .min(5, 'O intervalo deve ser no mínimo 5 minutos')
    .max(60, 'O intervalo deve ser no máximo 60 minutos'),
})

type FormData = zod.infer<typeof formValidationSchema>

export default function Home() {
  // register: recebe o name do input e métodos
  const { register, handleSubmit, watch, formState } = useForm<FormData>({
    resolver: zodResolver(formValidationSchema),
  })

  function handleForm(data: FormData) {
    console.log('data', data)
  }

  console.log(formState.errors)

  const taskState = watch('task')
  const disabledButton = !taskState

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleForm)} action="">
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <TextInput
            placeholder="Dê um nome para a atividade"
            type="text"
            id="task"
            {...register('task')}
          />

          <label htmlFor="taskDuration">durante</label>
          <MinutesAmountInput
            placeholder="00"
            type="text"
            id="taskDuration"
            step={5}
            min={5}
            max={60}
            {...register('minutesAmount', { valueAsNumber: true })}
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

        <CountDownButton disabled={disabledButton} type="submit">
          <Play size={24} />
          Começar
        </CountDownButton>
      </form>
    </HomeContainer>
  )
}
