import {
  createContext,
  ReactNode,
  useEffect,
  useReducer,
  useState,
} from 'react'
import { Cycle, cycleReducer } from '../reducers/cycle/reducer'
import {
  ActionTypes,
  addNewCycleAction,
  interruptCurrentCycleAction,
  markCurrentCycleAsFinishedAction,
} from '../reducers/cycle/actions'
import { differenceInSeconds } from 'date-fns'

interface CreateCycleData {
  task: string
  minutesAmount: number
}

interface CycleContextType {
  cycles: Cycle[]
  activeCycle: Cycle | undefined
  activeCycleId: string | null
  amountSecondsPassed: number
  markCycleCurrentAsFinished: () => void
  interruptCurrentCycle: () => void
  createNewCycle: (data: CreateCycleData) => void
  setSecondsPassed: (seconds: number) => void
}

interface CycleContextProviderProps {
  children: ReactNode
}

export const CycleContext = createContext({} as CycleContextType)

export function CycleContextProvider({ children }: CycleContextProviderProps) {
  const [cyclesState, dispatch] = useReducer(
    cycleReducer,
    {
      cycles: [],
      activeCycleId: null,
    },
    () => {
      const storedStateAsJSON = localStorage.getItem('@pomodoro:cycles-state')

      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON)
      }
    },
  )

  const { cycles, activeCycleId } = cyclesState

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)

  const [amountSecondsPassed, setAmountSecondsPassed] = useState(() => {
    if (activeCycle) {
      return differenceInSeconds(new Date(), new Date(activeCycle.startDate))
    }

    return 0
  })

  useEffect(() => {
    const stateJSON = JSON.stringify(cyclesState)

    localStorage.setItem('@pomodoro:cycles-state', stateJSON)
  }, [cyclesState])

  function createNewCycle(data: CreateCycleData) {
    const id = String(Math.random())

    const newCycle = {
      id,
      task: data.task,
      minutesAmount: data.minutesAmount,
      startDate: new Date(),
    }

    dispatch(addNewCycleAction(newCycle))
  }

  function setSecondsPassed(seconds: number) {
    setAmountSecondsPassed(seconds)
  }

  function markCycleCurrentAsFinished() {
    dispatch(markCurrentCycleAsFinishedAction())
  }

  function interruptCurrentCycle() {
    dispatch(interruptCurrentCycleAction())
  }

  return (
    <CycleContext.Provider
      value={{
        cycles,
        activeCycle,
        activeCycleId,
        amountSecondsPassed,
        markCycleCurrentAsFinished,
        interruptCurrentCycle,
        createNewCycle,
        setSecondsPassed,
      }}
    >
      {children}
    </CycleContext.Provider>
  )
}
