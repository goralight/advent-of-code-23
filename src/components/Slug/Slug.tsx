import React, { useState } from 'react'
import styled from '@emotion/styled'

const Container = styled.div`
  background-color: #ffffff;
  padding: 30px 46px;
`
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #EDEDED;
  border: none;
  padding: 25px 26px;
  border: 4px solid #0015FF;
  border-radius: 10px;
`

const Label = styled.label`
  font-size: 14px;
  font-weight: 700;
  color: #000000;
  line-height: 16px;
  padding-bottom: 8px;
  padding-left: 16px;
`

const StyledInput = styled.input`
  background-color: #EDEDED;
  border: none;
  height: 10px;
  padding: 20px;
  border: none;
  font-size: 24px;
  font-weight: 400;

  &:focus {
    outline: none;
  }
`

const SlugText = styled.h1`
  padding: 9px 46px;
  font-size: 16px;
  line-height: 19px;
  font-weight: 400;
`

const Slug = (): JSX.Element => {
  const [value, setValue] = useState('')
  
  const slug = value.trim().length > 0 ? `/${value.trim().split(' ').join('-').toLowerCase()}` : '';
  
  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(e.target.value)
  }

  return (
    <Container>
      <InputContainer>
        <Label htmlFor='titleInput'>Title</Label>
        <StyledInput value={value} onChange={handleValueChange}/> 
      </InputContainer>
      {slug && (
        <div>
          <SlugText>{slug}</SlugText>
        </div>
      )}
    </Container>
  )
}
  
export default Slug
