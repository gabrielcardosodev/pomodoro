import styled from 'styled-components'

export const DefaultScreenContainer = styled.div`
  max-width: 74rem;
  height: 90vh;
  margin: 2.5rem auto;
  padding: 2.5rem;
  overflow: hidden;

  background: ${(props) => props.theme['gray-800']};
  border-radius: 8px;

  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    margin: 2rem;
    padding: 1.5rem;
  }
`
