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
          fill = `fill: ${theme.palette.colors.red.light};`
          break
        case 'green':
          fill = `fill: ${theme.palette.colors.green.main};`
          break
        case 'blue':
          fill = `fill: ${theme.palette.colors.blue.main};`
          break
        case 'yellow':
          fill = `fill: ${theme.palette.colors.yellow.dark};`
          break
        case 'brown':
          fill = `fill: ${theme.palette.colors.brown.main};`
          break
        case 'pink':
          fill = `fill: ${theme.palette.colors.pink.main};`
          break
        case 'grey':
          fill = `fill: ${theme.palette.colors.grey.light};`
          break
        case 'black':
          fill = `fill: ${theme.palette.colors.grey.black};`
          break
        case 'white':
          fill = `fill: ${theme.palette.colors.grey.white};`
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
