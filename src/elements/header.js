import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { theme } from '../theme/theme'

const HeaderContainer = styled.header`
  background: ${theme.primary};
  padding: 1rem;
`

const NavBar = styled.nav`
  align-items: center;
  display: flex;
  justify-content: space-between;
`

const Title = styled.h2`
  color: white;
  font-size: clamp(1rem, 2.5vw, 1.5rem);
`

const IconContainer = styled.div`
  align-items: center;
  background: ${theme.darkenPrimary};
  border-radius: 50%;
  box-shadow: 1px 0px 6px 0px rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  height: 1.5rem;
  width: 1.5rem;

  @media (min-width: 768px) {
    height: 2rem;
    width: 2rem;
  }
`

const Icon = styled(FontAwesomeIcon)`
  color: white;
  cursor: pointer;
  font-size: clamp(1rem, 2.5vw, 1.5rem);
`

export { HeaderContainer, NavBar, Title, IconContainer, Icon }
