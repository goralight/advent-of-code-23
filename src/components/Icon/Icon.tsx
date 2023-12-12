import React from 'react'

import styled from '@emotion/styled'
import { IconName, IconSize, IconColor } from './Icon.types'

type IconProps = {
  icon: IconName
  size?: IconSize
  color?: IconColor
  onClick?: () => void
}

const Icon = ({ icon, size = 'md', color = 'white', onClick }: IconProps): JSX.Element => {
  let iconSize: string

  switch (size) {
    case 'xs':
      iconSize = '16'
      break
    case 'sm':
      iconSize = '24'
      break
    case 'md':
      iconSize = '32'
      break
    case 'lg':
      iconSize = '40'
      break
    case 'xl':
      iconSize = '48'
      break
  }

  const StyledSvg = styled.svg<{ color: IconColor, isClickable: boolean }>(
    ({ theme, color, isClickable }): string => {
      let fill: string

      switch (color) {
        case 'red':
          fill = `fill: ${theme.colors.red.cognac};`
          break
        case 'green':
          fill = `fill: ${theme.colors.green.spanishGreen};`
          break
        case 'blue':
          fill = `fill: ${theme.colors.blue.nileBlue};`
          break
        case 'yellow':
          fill = `fill: ${theme.colors.yellow.spicyMustard};`
          break
        case 'brown':
          fill = `fill: ${theme.colors.brown.acadia};`
          break
        case 'pink':
          fill = `fill: ${theme.colors.pink.pastelMagenta};`
          break
        case 'grey':
          fill = `fill: ${theme.colors.grey.lightGrey};`
          break
        case 'black':
          fill = `fill: ${theme.colors.grey.black};`
          break
        case 'white':
          fill = `fill: ${theme.colors.grey.white};`
      }

      return `
        ${fill}
        ${isClickable ? 'cursor: pointer;' : ''}
      `
    }
  )

  return (
    <StyledSvg color={color} isClickable={!!onClick} width={iconSize} height={iconSize} onClick={onClick} >
      <use href={`/icons/sprite.svg#${icon}`} />
    </StyledSvg>
  )
}

export default Icon
