import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    width: 2.5rem;
    height: 2.5rem;
  }

  nav {
    display: flex;
    gap: 0.5rem;

    a {
      width: 3rem;
      height: 3rem;
      color: ${(props) => props.theme['gray-500']};

      display: flex;
      align-items: center;
      justify-content: center;

      border-top: 3px solid transparent;
      border-bottom: 3px solid transparent;

      transition: color 0.2s;

      &:hover {
        border-bottom: 3px solid ${(props) => props.theme['brand-500']};
      }

      &:focus {
        box-shadow: none;
      }

      &.active {
        color: ${(props) => props.theme['brand-500']};
      }
    }
  }
`
