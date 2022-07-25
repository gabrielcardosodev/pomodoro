import styled from 'styled-components'

export const HomeContainer = styled.main`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.5rem;
  }
`

export const FormContainer = styled.div`
  width: 100%;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  color: ${(props) => props.theme['gray-100']};

  font-size: 1.125rem;
  font-weight: bold;
`

const BaseInput = styled.input`
  height: 2.5rem;
  padding: 0 0.5rem;

  background: transparent;
  color: ${(props) => props.theme['gray-100']};

  border: 0;
  border-bottom: 2px solid ${(props) => props.theme['gray-500']};

  font-weight: bold;
  font-size: 1.125rem;

  &:focus {
    box-shadow: none;
    border-color: ${(props) => props.theme['brand-500']};
  }

  &::placeholder {
    color: ${(props) => props.theme['gray-500']};
  }
`

export const TaskInput = styled(BaseInput)`
  flex: 1;

  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }
`

export const MinutesAmountInput = styled(BaseInput)`
  width: 4rem;
`

export const CountdownContainer = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  gap: 1rem;

  font-family: 'Roboto Mono', monospace;
  font-size: 10rem;
  line-height: 8rem;

  color: ${(props) => props.theme['gray-100']};

  span {
    padding: 2rem 1rem;
    background: ${(props) => props.theme['gray-700']};
    border-radius: 8px;
  }
`

export const Separator = styled.div`
  width: 8rem;
  padding: 2rem 0;

  display: flex;
  justify-content: center;

  overflow: hidden;

  color: ${(props) => props.theme['brand-700']};
`
export const StartCountdownButton = styled.button`
  width: 100%;
  padding: 1rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  border: 0;
  border-radius: 8px;

  color: ${(props) => props.theme['gray-100']};
  background: ${(props) => props.theme['brand-700']};
  font-weight: bold;

  cursor: pointer;

  transition: background 0.2s ease-in-out;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    background: ${(props) => props.theme['brand-500']};
  }
`
