import React from 'react'
import styled from '@emotion/styled'

interface Props {
  text: string
}

const Container = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 36px;
  padding: 20px;
`
const Header = styled.h1`
  width: fit-content;
  text-wrap: nowrap;
  font-size: 72px;
  font-weight: 700;
  line-height: 64px;
`

const LineContainer = styled.div`
  width: 100%;
`

const Line = styled.div`
  background-color: #000000;
  width: 100%;
  height: 1px;
`

const HeaderWithRulers = ({ text }: Props): JSX.Element => {
  return (
    <Container>
      <LineContainer>
        <Line/>
      </LineContainer>
      <Header>{text}</Header>
      <LineContainer>
        <Line/>
      </LineContainer>
    </Container>
  )
}

export default HeaderWithRulers
