import React, { forwardRef, useState, useRef, useImperativeHandle, useCallback } from 'react'
import styled from '@emotion/styled'

import Input from '../Input/Input'
import Icon from '../Icon/Icon'

type PasswordToggleProps = {
  onChange?: (value: string) => void
}

const Container = styled.div`
  position: relative;
`

const IconContainer = styled.div`
  position: absolute;
  top: 50%;
  right: 24px;
  transform: translatey(-50%);
`

const PasswordToggle = forwardRef<HTMLInputElement | null, PasswordToggleProps>(
  ({ onChange }: PasswordToggleProps, ref): JSX.Element => {
    const internalRef = useRef<HTMLInputElement | null>(null)

    const [isVisible, setIsVisible] = useState(false)
    const [shouldHideIcon, setShouldHideIcon] = useState(true)

    const handleOnChange = useCallback((value: string): void => {
      setShouldHideIcon(value.length === 0)
      onChange?.(value)
    }, [])

    useImperativeHandle(ref, () => internalRef?.current as HTMLInputElement, [internalRef])

    return (
      <Container>
        <Input type={isVisible ? 'text' : 'password'} label='Password' ref={internalRef} onChange={handleOnChange} />
        <IconContainer>
          {!shouldHideIcon && <Icon
            icon={isVisible ? 'eyeOpened' : 'eyeClosed'}
            size='md'
            color='black'
            onClick={(): void => setIsVisible(!isVisible)}
          />}
        </IconContainer>
      </Container>
    )
  }
)

PasswordToggle.displayName = 'PasswordToggle'
export default PasswordToggle
