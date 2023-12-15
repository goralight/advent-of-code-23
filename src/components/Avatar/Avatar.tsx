import React from 'react'

import styled from '@emotion/styled'

import Icon from '../Icon/Icon'
import { IconName, IconColor } from '../Icon/Icon.types'

type AvatarProps = {
  src?: string
  indicator?: 'online' | 'busy' | 'unknown'
  initial?: string
  isHidden?: boolean
  showFlair?: boolean
}

const AvatarContainer = styled.div<{ isHidden: boolean }>`
  position: relative;
  border-radius: 50%;
  background-color: ${({ theme }): string => theme.palette.colors.green.main};

  width: 68px;
  height: 68px;
  border: solid 6px ${({ theme, isHidden }): string => isHidden ? theme.palette.colors.green.light as string : theme.palette.colors.grey.white};
`

const CenteredContainer = styled.div<{ src: string | undefined, isHidden: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  font-size: 32px;
  line-height: 26px;
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  ${({ src, isHidden }): string => src && !isHidden ? `background-image: url("${src}");` : ''}
  background-size: cover;
  border-radius: 50%;
  color: ${({ theme }): string => theme.palette.colors.grey.white};
`

const Flair = styled.img`
  position: absolute;
  top: -27px;
  right: -25px;
`

const Indicator = styled.div<{ indicator: AvatarProps['indicator'] }>(
  ({ theme, indicator }) => {
    if (!indicator) return null

    let backgroundColor: string

    switch (indicator) {
      case 'online':
        backgroundColor = theme.palette.colors.green.main
        break
      case 'busy':
        backgroundColor = theme.palette.colors.red.main
        break
      case 'unknown':
        backgroundColor = theme.palette.colors.yellow.main
        break
    }

    return `
      position: absolute;
      display: flex;
      bottom: 0px;
      right: -14px;

      padding: 4px;
      border-radius: 50%;
      border: solid 2px ${theme.palette.colors.grey.white};
      background-color: ${backgroundColor};
    `
  }
)

const Avatar = ({
  src,
  indicator,
  initial,
  isHidden = false,
  showFlair = false
}: AvatarProps): JSX.Element => {
  if (!src && !initial) {
    throw new Error('Avatar requires either a src or initial prop')
  }
  if (initial && initial.length > 1) {
    throw new Error('Initial can only be 1 character long')
  }

  let indicatorIcon: IconName = 'question'
  let indicatorColor: IconColor = 'black'

  switch (indicator) {
    case 'online':
      indicatorIcon = 'check'
      indicatorColor = 'white'
      break
    case 'busy':
      indicatorIcon = 'minus'
      indicatorColor = 'white'
      break
  }

  let Content: JSX.Element | null = null

  if (isHidden) {
    Content = <Icon icon='eyeClosed' color='white' size='md' />
  } else if (!src) {
    Content = <span>{initial}</span>
  }

  return (
    <AvatarContainer isHidden={isHidden}>
      <CenteredContainer src={src} isHidden={isHidden}>
        {Content}
      </CenteredContainer>
      {indicator && <Indicator indicator={indicator}>
        <Icon icon={indicatorIcon} color={indicatorColor} size='xs' />
      </Indicator>}
      {showFlair && <Flair src='/images/santa-hat.png' />}
    </AvatarContainer>
  )
}

export default Avatar
