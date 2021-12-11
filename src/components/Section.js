import React from 'react'
import styled from 'styled-components';

const Section = ({title, description, leftBtnText, rightBtnText, backgroundImage, arrowBtn}) => {
    return(
        <Wrap backgroundImage={backgroundImage}>
            <ItemText>
                <h1>{title}</h1>
                <p>{description}</p>
            </ItemText>
            <Buttons>
                <ButtonGroup>
                    <LeftButton>
                        {leftBtnText}
                    </LeftButton>
                    <RightButton>
                        {rightBtnText}
                    </RightButton>
                </ButtonGroup>
                {arrowBtn && <DownArrow src='/images/down-arrow.svg'/>}
            </Buttons>
        </Wrap>
    )
};

const Wrap = styled.div `
    width: 100vw;
    height: 100vh;
    background-image: ${props => `url('/images/${props.backgroundImage}')`};
    background-size: cover;
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

const ButtonGroup = styled.div `
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-bottom: 30px;
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
    margin-left: 50px;
    cursor: pointer;
`
const RightButton = styled(LeftButton)`
    background-color: white;
    opacity: 0.85;
    color: black;
`;

const DownArrow = styled.img `
    margin-top: 20px;
    height: 40px;
    animation: animateDown infinite 1.5s;
    overflow-x: hidden;
`;

const Buttons = styled.div ``;


export default Section;