import styled from 'styled-components'

export const FormContainer = styled.div`
  width: 100%;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 0rem;
  margin-top: 2rem;

  color: ${(props) => props.theme['gray-100']};

  font-size: 1.125rem;
  font-weight: bold;

  @media (max-width: 768px) {
    flex-direction: column;
    font-size: 1rem;
  }
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

    @media (max-width: 768px) {
      text-align: center;
    }
  }
`

export const TaskInput = styled(BaseInput)`
  width: 21rem;

  @media (max-width: 768px) {
    margin-bottom: 0.5rem;
  }

  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`

export const MinutesAmountInput = styled(BaseInput)`
  width: 4rem;

  @media (max-width: 768px) {
    text-align: center;
  }

  @media (max-width: 768px) {
    width: 10rem;
  }
`
