import React from 'react'

import styled from '@emotion/styled'

import Icon from '../Icon/Icon'

type AvatarProps = {
  src?: string
  indicator?: 'online' | 'busy' | 'unknown'
  initial?: string
  isHidden?: boolean
  showFlair?: boolean
}

const AvatarContainer = styled.div`
  position: relative;
  border-radius: 50%;
  background-color: ${({ theme }): string => theme.colors.grey.lightGrey};
`

const InitialContainer = styled.div`

  width: 100%;
  height: 100%;
  padding: 12px;

  font-size: 1.5rem;
  color: ${({ theme }): string => theme.colors.grey.white};
`

const Indicator = styled.div<{ indicator: AvatarProps['indicator'] }>(
  ({ theme, indicator }) => {
    let backgroundColor: string

    switch (indicator) {
      case 'online':
        backgroundColor = `background-color: ${theme.colors.green.cruseo}`
        break
      case 'busy':
        backgroundColor = `background-color: ${theme.colors.red.orangeRed}`
        break
      case 'unknown':
        backgroundColor = `background-color: ${theme.colors.yellow.supernova}`
        break
      default:
        backgroundColor = `background-color: ${theme.colors.grey.lightGrey}`
    }

    return `
      position: absolute;
      bottom: 0;
      right: 0;

      padding: 8px;
      border-radius: 50%;
      ${backgroundColor};
    `
  }
)

const Avatar = ({
  src,
  indicator,
  initial,
  isHidden,
  showFlair
}: AvatarProps): JSX.Element => {
  if (!src && !initial) {
    throw new Error('Avatar requires either a src or initial prop')
  }



  return (
    <AvatarContainer>
      {src && <img src={src} alt='' />}
      {!src && <InitialContainer>{initial}</InitialContainer>}
      {/* {indicator && <Indicator indicator={indicator}>
        <Icon icon='thumbsUp' color='white' size='xs' />
      </Indicator>} */}
    </AvatarContainer>
  )
}

export default Avatar
