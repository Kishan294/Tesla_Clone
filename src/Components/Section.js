import React from 'react'
import styled from 'styled-components'
import down_arrow from '../images/down-arrow.svg'
import { Fade } from 'react-reveal'

export const Section = ({ title, description, backgroundImg, leftBtnText, rightBtnText }) => {
  return (
    <Wrap backgroundImg={backgroundImg}>
      <Fade bottom>
        <ItemText>
          <h1>{title}</h1>
          <p>{description}</p>
        </ItemText>
      </Fade>
      <Buttons>
        <Fade bottom>
          <ButtonGroup>
            <LeftButton>
              {leftBtnText}
            </LeftButton>
            <RightButton>
              {rightBtnText}
            </RightButton>
          </ButtonGroup>
          <DownArrow src={down_arrow}></DownArrow>
        </Fade>
      </Buttons>
    </Wrap>
  )
}

const Wrap = styled.div`
  background-image: url(${props => props.backgroundImg});
  width: 100vw;
  height: 100vh;
  background-size: cover;
  color: white;
  text-align: center;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`
const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
`
const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
  @media(max-width: 768px){
    flex-direction: column;
  }
`

const LeftButton = styled.button`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  display: flex;
  color: white;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  outline: none;
  opacity: 0.85;
  border: none;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
  margin: 8px;
`

const RightButton = styled(LeftButton)`
  background-color: white;
  opacity: 0.65;
  color: black;
`

const DownArrow = styled.img`
  height: 40px;
  animation: animateDown infinite 1.5s;
  overflow-x: hidden;
`

const Buttons = styled.div`
  
`