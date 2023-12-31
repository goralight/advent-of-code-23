import React, { forwardRef, useCallback, useState } from 'react'

import styled from '@emotion/styled'

type InputType = 'text'
  | 'password'
  | 'email'
  | 'number'
  | 'telephone'

type InputProps = {
  type?: InputType
  label?: string
  onChange?: (value: string) => void
}

const InputContainer = styled.div(
  ({ theme }): string => {
    return `
      position: relative;
    
      *:invalid {
        & ~ label {
          color: ${theme.palette.colors.grey.white};
        }
      }
    `
  }
)

const LabelStyled = styled.label<{ isFocused: boolean, type: InputType }>(
  ({ theme, isFocused, type }): string => {
    return `
      position: absolute;
      top: ${isFocused ? '5px' : '50%'};
      left: ${isFocused ? '9' : '43'}px;
      transform: ${isFocused ? 'none' : 'translateY(-50%)'};
      font-size: ${isFocused ? '18' : '32'}px;
      font-family: Kalam;
      text-transform: uppercase;
      line-height: 30px;
      font-weight: 700;
      color: ${type === 'email' ? theme.palette.colors.grey.black : theme.palette.colors.green.main};
      cursor: auto;
      transition: top 0.3s ease-in-out,
        left 0.3s ease-in-out,
        transform 0.3s ease-in-out,
        font-size 0.3s ease-in-out;
    `
  }
)

const InputStyled = styled.input(
  ({ theme }): string => {
    return `
      height: 100px;
      padding: 0 60px 0 43px;
      background-color: ${theme.palette.colors.grey.white};
      border: none;
      font-family: Inter;
      font-size: 32px;
      
      &:invalid {
        color: ${theme.palette.colors.grey.white};
        background-color: ${theme.palette.colors.red.main};
        border: 3px solid ${theme.palette.colors.red.dark};
      }
    `
  }
)

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ type = 'text', label, onChange }: InputProps, ref): JSX.Element => {
    const [isFocused, setIsFocused] = useState(false)
    const [value, setValue] = useState('')

    const handleFocus = useCallback((focus: boolean) => () => {
      setIsFocused(focus)
    }, [])

    const handleInput = useCallback((e: React.ChangeEvent<HTMLInputElement>): void => {
      setValue(e.target.value)
      onChange?.(e.target.value)
    }, [])

    return (
      <InputContainer>
        <InputStyled
          ref={ref}
          id={label}
          value={value}
          onChange={handleInput}
          type={type}
          onFocus={handleFocus(true)}
          onBlur={handleFocus(false)}
        />
        {label && <LabelStyled
          type={type}
          isFocused={isFocused || value.length > 0}
          htmlFor={label}
        >
          {label}
        </LabelStyled>}
      </InputContainer>
    )
  })

Input.displayName = 'Input'
export default Input
