import React, { forwardRef, useState, useRef, useImperativeHandle } from 'react'
import styled from '@emotion/styled'

import Input from '../Input/Input'
import Icon from '../Icon/Icon'

const Container = styled.div`
  position: relative;
`

const IconContainer = styled.div`
  position: absolute;
  top: 50%;
  right: 24px;
  transform: translatey(-50%);
`

const PasswordToggle = forwardRef<HTMLInputElement | null>(
  (_, ref): JSX.Element => {
    const internalRef = useRef<HTMLInputElement | null>(null)

    const [isVisible, setIsVisible] = useState(false)

    useImperativeHandle(ref, () => internalRef?.current as HTMLInputElement, [internalRef])

    return (
      <Container>
        <Input type={isVisible ? 'text' : 'password'} label='Password' ref={internalRef} />
        <IconContainer>
          <Icon
            icon={isVisible ? 'eyeOpened' : 'eyeClosed'}
            size='md'
            color='black'
            onClick={(): void => setIsVisible(!isVisible)}
          />
        </IconContainer>
      </Container>
    )
  }
)

PasswordToggle.displayName = 'PasswordToggle'
export default PasswordToggle
