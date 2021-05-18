import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';

const Section = ({title, description, leftBtnText, rightBtnText, backgroundImg}) => {
  return (
    <Wrap bgImage={backgroundImg}>
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
    
              {/* If rightBtnText exists, then make rightBtnText */}
              {rightBtnText &&
                <RightButton>
                  {rightBtnText}
                </RightButton>
              }
            </ButtonGroup>
            <DownArrow src="/images/down-arrow.svg"/>
          </Fade>
        </Buttons>
    </Wrap>
  )
}

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url('/images/model-s.jpg');
  display: flex;
  flex-direction: column;   // Switches alignments
  justify-content: space-between;   // vertical alignment
  align-items: center;    // horizontal alignment
  background-image: ${props => `url("/images/${props.bgImage}")`};
`

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
`

const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;

  // if screen width is smaller than 768px, change flex-direction to column
  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
  margin: 8px
`

// Allows us to inherit the css of the LeftButton
const RightButton = styled(LeftButton)`
  background-color: white;
  opacity: 0.65;
  color: black;
`

const DownArrow = styled.img`
  height: 40px;
  overflow: hidden;
  animation: animateDown infinite 1.5s;
`

const Buttons = styled.div`

`

export default Section
