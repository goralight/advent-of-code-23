import React from 'react'

import styled from '@emotion/styled'

type Size = 'sml' | 'md' | 'lrg'

const StyledDiv = styled.div<{ size: Size }>(
  ({ theme, size }): string => {
    let padding: number

    switch (size) {
      case 'sml':
        padding = 4
        break
      case 'md':
        padding = 8
        break
      case 'lrg':
        padding = 16
        break
    }

    return `
      color: ${theme.colors.green.spanishGreen};
      background-color: ${theme.colors.red.cognac};
      border: 1px solid ${theme.colors.grey.lightGrey};
      padding: ${padding}px;
    `
  }
)

interface TestProps {
  children: React.ReactNode
  size?: Size
}

const Test = ({ children, size = 'md' }: TestProps): JSX.Element => {
  return (
    <StyledDiv size={size}>
      {children}
    </StyledDiv>
  )
}

export default Test
