import React, { useState } from 'react'

import styled from '@emotion/styled'

import Icon from '../Icon/Icon'

type CheckboxProps = {
  defaultChecked?: boolean
  disabled?: boolean
  onChange: () => void
}

const CheckboxContainer = styled.label<{ disabled: boolean, checked: boolean }>(
  ({ theme, disabled, checked }): string => {
    return `
      display: block;
      padding: 4px 4px ${checked ? '0' : '4px'} 4px;
      border-radius: 2px;
      background-color: ${disabled ? theme.palette.colors.grey.light : theme.palette.colors.grey.white};
      cursor: pointer;
    `
  }
)

const StyledCheckbox = styled.input`
  display: none;
`

const EmptySpace = styled.div`
  height: 40px;
  width: 40px;
`

// todo: add different sizes?
const Checkbox = ({ defaultChecked = false, disabled = false, onChange }: CheckboxProps): JSX.Element => {
  const [checked, setChecked] = useState(defaultChecked)

  const handleOnChange = (): void => {
    setChecked(!checked)
    onChange()
  }

  return (
    <CheckboxContainer disabled={disabled} checked={checked}>
      <StyledCheckbox
        type="checkbox"
        checked={checked}
        onChange={handleOnChange}
        disabled={disabled}
      />
      {checked ? <Icon size='lg' color='green' icon='check' /> : <EmptySpace />}
    </CheckboxContainer>
  )
}

export default Checkbox
