import { createContext, ReactNode, useReducer } from 'react'
import { Cycle, cycleReducer } from '../reducers/cycle/reducer'
import {
  ActionTypes,
  addNewCycleAction,
  interruptCurrentCycleAction,
  markCurrentCycleAsFinishedAction,
} from '../reducers/cycle/actions'

interface CreateCycleData {
  task: string
  minutesAmount: number
}

interface CycleContextType {
  cycles: Cycle[]
  activeCycle: Cycle | undefined
  activeCycleId: string | null
  markCycleCurrentAsFinished: () => void
  interruptCurrentCycle: () => void
  createNewCycle: (data: CreateCycleData) => void
}

interface CycleContextProviderProps {
  children: ReactNode
}

export const CycleContext = createContext({} as CycleContextType)

export function CycleContextProvider({ children }: CycleContextProviderProps) {
  const [cyclesState, dispatch] = useReducer(cycleReducer, {
    cycles: [],
    activeCycleId: null,
  })

  const { cycles, activeCycleId } = cyclesState

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)

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
        markCycleCurrentAsFinished,
        interruptCurrentCycle,
        createNewCycle,
      }}
    >
      {children}
    </CycleContext.Provider>
  )
}
