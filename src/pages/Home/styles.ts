import styled from 'styled-components'

export const HomeContainer = styled.main`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;

    @media (max-width: 768px) {
      gap: 2.5rem;
    }
  }
`

const BaseCountdownButton = styled.button`
  width: 75%;
  padding: 1rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  border: 0;
  border-radius: 8px;

  color: ${(props) => props.theme['gray-100']};
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

  @media (max-width: 768px) {
    width: 100%;
  }
`

export const StartCountdownButton = styled(BaseCountdownButton)`
  background: ${(props) => props.theme['brand-700']};

  &:not(:disabled):hover {
    background: ${(props) => props.theme['brand-500']};
  }
`

export const StopCountdownButton = styled(BaseCountdownButton)`
  background: ${(props) => props.theme['red-500']};

  &:not(:disabled):hover {
    background: ${(props) => props.theme['brand-700']};
  }
`
