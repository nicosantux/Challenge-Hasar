import styled from 'styled-components'

import { theme } from '../theme/theme'

const GenderContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-evenly;
  padding: 1rem;
`

const Gender = styled.img`
  cursor: pointer;
  width: 100%;
  max-width: 300px;
`

const InputRadio = styled.input`
  display: none;
`

const Main = styled.main`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 90vh;
  justify-content: center;
  overflow: hidden;
  padding: 1rem;
`

const BtnContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-evenly;
  margin: 2rem 0;
  width: 100%;

  @media (min-width: 768px) {
    width: 50%;
  }

  @media (min-width: 1024px) {
    width: 30%;
  }
`

const Btn = styled.button`
  background: ${(props) => (props.goBack ? theme.darkenPrimary : theme.accent)};
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

const FormTitle = styled.h2`
  font-size: clamp(1.5rem, 2.5vw, 2rem);
  color: ${theme.lightenPrimary};
  margin-bottom: 2rem;
  text-align: center;
  text-transform: uppercase;
`

const Form = styled.form`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;

  @media (min-width: 768px) {
    width: 50%;
  }

  @media (min-width: 1024px) {
    width: 30%;
  }
`

const InputContainer = styled.div`
  margin-bottom: 1.25rem;
  position: relative;
  width: 75%;

  input:focus + label,
  input:not(:placeholder-shown) + label {
    color: ${theme.darkenPrimary};
    font-size: 0.75rem;
    left: -0.5rem;
    padding: 0.5rem 1rem;
    top: -1.125rem;
  }
`
const Label = styled.label`
  position: absolute;
  font-size: 1rem;
  left: 0.5rem;
  top: 0.5rem;
`

const Inputs = styled.input`
  border: none;
  border-bottom: 1px solid ${theme.lightenPrimary};
  font-size: 1rem;
  outline: none;
  padding: 0.5rem;
  transition: 0.3s all ease-in-out;
  width: 100%;

  &:focus {
    border-bottom: 1px solid ${theme.darkenPrimary};
  }

  &::placeholder {
    color: transparent;
  }
`

const ErrorText = styled.p`
  color: red;
`

export {
  GenderContainer,
  Gender,
  InputRadio,
  Main,
  BtnContainer,
  Btn,
  FormTitle,
  Form,
  InputContainer,
  Label,
  Inputs,
  ErrorText,
}
