import styled from 'styled-components'

const STATUS_COLOR = {
  finished: 'brand-500',
  pending: 'yellow-500',
  failed: 'red-500',
} as const

interface StatusProps {
  statusColor: keyof typeof STATUS_COLOR
}

export const HistoryContainer = styled.main`
  flex: 1;
  padding: 3.5rem;
  height: 100%;

  display: flex;
  flex-direction: column;

  h1 {
    font-size: 1.5rem;
    color: ${(props) => props.theme['gray-100']};
  }
`

export const HistoryTable = styled.div`
  flex: 1;
  margin-top: 2rem;
  overflow: auto;

  table {
    min-width: 600px;
    width: 100%;

    border-collapse: collapse;

    thead {
      top: 0;
      position: sticky;
      -webkit-box-shadow: 0px 8px 20px -5px rgba(18, 18, 20, 0.5);
      box-shadow: 0px 8px 20px -5px rgba(18, 18, 20, 0.5);
    }

    th {
      padding: 1rem;

      background-color: ${(props) => props.theme['gray-600']};
      color: ${(props) => props.theme['gray-100']};

      text-align: left;
      font-size: 0.875rem;
      line-height: 1.6;
    }

    td {
      padding: 1rem;

      border-top: 4px solid ${(props) => props.theme['gray-800']};

      background-color: ${(props) => props.theme['gray-600']};

      font-size: 0.875rem;
      line-height: 1.6;

      &:first-child {
        width: 50%;
        padding-left: 1.5rem;
      }

      &:last-child {
        padding-right: 1.5rem;
      }
    }
  }
`

export const Status = styled.span<StatusProps>`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    content: '';
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    background-color: ${(props) =>
      props.theme[STATUS_COLOR[props.statusColor]]};
  }
`
