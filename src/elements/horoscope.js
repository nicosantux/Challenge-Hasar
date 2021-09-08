import styled from 'styled-components'

import { theme } from '../theme/theme'

const Main = styled.main`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem;
  height: 90vh;
`

const ImageContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
  width: 80%;

  @media (min-width: 768px) {
    width: 50%;
  }

  @media (min-width: 1024px) {
    width: 30%;
  }
`

const Title = styled.h2`
  font-size: clamp(1.5rem, 2.5vw, 2em);
  margin-bottom: 1rem;
`

const Text = styled.p`
  font-size: clamp(1rem, 2.5vw, 1.5em);
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    text-align: center;
  }
`

const BtnContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-evenly;
  margin: 2rem 0;
  width: 100%;
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

export { Main, ImageContainer, Title, Text, BtnContainer, Btn }
