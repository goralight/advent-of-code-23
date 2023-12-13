import React, { useState } from 'react'

import styled from '@emotion/styled'

type BurgerMenuProps = {
  onClick: () => void
}

const BurgerButton = styled.button(
  ({ theme }): string => {
    return `
      position: relative;
      width: 69px;
      height: 58px;
      padding: 15px 10px;
      border: none;
      background-color: ${theme.colors.yellow.supernova};
      cursor: pointer;
    
      &:focus {
        outline: none;
      }
    `
  }
)
// translateY(18px)
// translateY(-18px)
//     transform: rotate(45deg) translateY(-8px) translateX(-8px);
const LineContainer = styled.div<{ isToggled: boolean }>`
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: column;
  justify-content: space-between;

  & div:nth-of-type(1) {
    transform: ${({ isToggled }): string => isToggled ? 'rotate(-45deg) translate(-9px, 8px)' : 'rotate(0deg) translate(0px, 0px)'};
  }

  & div:nth-of-type(2) {
    transform: ${({ isToggled }): string => isToggled ? 'rotate(45deg) translate(-9px, -8px)' : 'rotate(0deg) translate(0px, 0px)'};
  }
`

const Line = styled.div(
  ({ theme }): string => {
    return `
      transition: transform 0.2s ease-in-out;
      border: solid 2px ${theme.colors.grey.black};
    `
  }
)

const BurgerMenu = ({ onClick }: BurgerMenuProps): JSX.Element => {
  const [isToggled, setIsToggled] = useState(false)

  const handleOnClick = (): void => {
    setIsToggled(!isToggled)
    onClick()
  }

  return (
    <BurgerButton onClick={handleOnClick}>
      <LineContainer isToggled={isToggled}>
        <Line />
        {!isToggled && <Line />}
        {<Line />}
      </LineContainer>
    </BurgerButton>
  )
}

export default BurgerMenu
