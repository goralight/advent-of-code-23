import React, { useState, useMemo } from 'react'

import styled from '@emotion/styled'

type InputType = 'text'
  | 'password'
  | 'email'
  | 'number'
  | 'telephone'

type InputProps = {
  type?: InputType
  label?: string
}

const InputContainer = styled.div(
  ({ theme }): string => {
    return `
      position: relative;
    `
  }
)

const LabelStyled = styled.label<{ isFocused: boolean }>(
  ({ theme, isFocused }): string => {
    return `
      position: absolute;
      top: ${isFocused ? '5' : '40'}px;
      left: ${isFocused ? '9' : '43'}px;
      font-size: ${isFocused ? '18' : '32'}px;
      line-height: 30px;
      font-weight: 700;
      color: ${theme.colors.green.spanishGreen};
      transition: all 0.3s ease-in-out;
    `
  }
)

const InputStyled = styled.input(
  ({ theme }): string => {
    return `
    height: 100px;
    width: 100%;
    padding: 0 43px;
    background-color: ${theme.colors.grey.white};
    border: none;
    font-family: Kalam;
    font-size: 32px;
    
    &:invalid {
      background-color: ${theme.colors.red.orangeRed};
      border: 3px solid ${theme.colors.red.fireEngineRed};
    }
    `
  }
)

const Input = ({
  type = 'text',
  label
}: InputProps): JSX.Element => {
  const [isFocused, setIsFocused] = useState(false)
  const [value, setValue] = useState('')

  const handleFocus = (focus: boolean) => () => {
    setIsFocused(focus)
  }

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(e.target.value)
  }

  return (
    <InputContainer>
      {label && <LabelStyled isFocused={isFocused || value.length > 0} htmlFor={label}>{label}</LabelStyled>}
      <InputStyled id={label} value={value} onChange={handleInput} type={type} onFocus={handleFocus(true)} onBlur={handleFocus(false)} />
    </InputContainer>
  )
}

export default Input
