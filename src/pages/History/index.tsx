import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { useContext } from 'react'
import { CycleContext } from '../../contexts/CycleContext'

import { HistoryContainer, HistoryTable, Status } from './styles'

export function History() {
  const { cycles } = useContext(CycleContext)

  return (
    <HistoryContainer>
      <h1>Meu histórico</h1>

      <HistoryTable>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Inicio</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {cycles.map((cycle) => {
              return (
                <tr key={cycle.id}>
                  <td>{cycle.task}</td>
                  <td>{cycle.minutesAmount} minutos</td>
                  <td>
                    {formatDistanceToNow(cycle.startDate, {
                      addSuffix: true,
                      locale: ptBR,
                    })}
                  </td>

                  <td>
                    {cycle.finishedDate && (
                      <Status statusColor={'finished'}>Concluída</Status>
                    )}

                    {cycle.endDate && (
                      <Status statusColor={'failed'}>Interrompida</Status>
                    )}

                    {!cycle.finishedDate && !cycle.endDate && (
                      <Status statusColor={'pending'}>Em andamento</Status>
                    )}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </HistoryTable>
    </HistoryContainer>
  )
}
