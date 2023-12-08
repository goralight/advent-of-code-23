import React from 'react'

import styled from '@emotion/styled'
import { IconName, IconSize, IconColor } from './Icon.types'

type IconProps = {
  icon: IconName
  size?: IconSize
  color?: IconColor
}

const Icon = ({ icon, size = 'md', color = 'white' }: IconProps): JSX.Element => {
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

  const StyledSvg = styled.svg<{ color: IconColor }>(
    ({ theme, color }): string => {
      switch (color) {
        case 'red':
          return `fill: ${theme.colors.red.cognac};`
        case 'green':
          return `fill: ${theme.colors.green.spanishGreen};`
        case 'blue':
          return `fill: ${theme.colors.blue.nileBlue};`
        case 'yellow':
          return `fill: ${theme.colors.yellow.spicyMustard};`
        case 'brown':
          return `fill: ${theme.colors.brown.acadia};`
        case 'pink':
          return `fill: ${theme.colors.pink.pastelMagenta};`
        case 'grey':
          return `fill: ${theme.colors.grey.lightGrey};`
        case 'black':
          return `fill: ${theme.colors.grey.black};`
        case 'white':
          return `fill: ${theme.colors.grey.white};`
      }
    }
  )

  return (
    <StyledSvg color={color} width={iconSize} height={iconSize}>
      <use href={`/icons/sprite.svg#${icon}`} />
    </StyledSvg>
  )
}

export default Icon
