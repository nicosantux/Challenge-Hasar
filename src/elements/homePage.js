import styled from 'styled-components'

import { theme } from '../theme/theme'

const Main = styled.main`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  padding: 1rem;
`

const Avatar = styled.img`
  border-radius: 50%;
  margin-bottom: 2rem;
`

const Btn = styled.button`
  background: ${theme.accent};
  border: none;
  border-radius: 2rem;
  box-shadow: 2px 2px 8px 0px rgba(0, 0, 0, 0.25);
  color: white;
  cursor: pointer;
  font-size: clamp(0.875rem, 2.5vw, 1.5rem);
  outline: none;
  padding: 0.5rem 2rem;
  text-transform: uppercase;
`

export { Main, Avatar, Btn }
