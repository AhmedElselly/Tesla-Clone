import React from 'react';
import styled from 'styled-components';
import Section from './Section';

const Home = props => {
    return(
        <Container>
            <Section 
                title='Model S'
                description='Order Online For Touchless Deliveryz'
                leftBtnText='Custom Order'
                rightBtnText='Existing Inventory'
                backgroundImage='model-s.jpg'
                arrowBtn={true}
            />
            <Section
                title='Model Y'
                description='Order Online For Touchless Deliveryz'
                leftBtnText='Custom Order'
                rightBtnText='Existing Inventory'
                backgroundImage='model-y.jpg'
                arrowBtn={false}
            />
            <Section
                title='Model 3'
                description='Order Online For Touchless Deliveryz'
                leftBtnText='Custom Order'
                rightBtnText='Existing Inventory'
                backgroundImage='model-3.jpg'
                arrowBtn={false}
            />
            <Section
                title='Model S'
                description='Order Online For Touchless Deliveryz'
                leftBtnText='Custom Order'
                rightBtnText='Existing Inventory'
                backgroundImage='model-x.jpg'
                arrowBtn={false}
            />
            <Section
                title='Lowest Cost Solar Panels in America'
                description='Money-back guarantee'
                leftBtnText='Custom Order'
                rightBtnText='Existing Inventory'
                backgroundImage='solar-panel.jpg'
                arrowBtn={false}
            />
            <Section
                title='Solar For New Roofs'
                description='Solar Roof Costs Less Than a New Roof Plus Solar Panels'
                leftBtnText='Custom Order'
                rightBtnText='Existing Inventory'
                backgroundImage='solar-roof.jpg'
                arrowBtn={false}
            />
            <Section
                title='Accessories'
                description=''
                leftBtnText='Shop now'
                rightBtnText='Existing Inventory'
                backgroundImage='accessories.jpg'
                arrowBtn={false}
            />
        </Container>
    )
}

const Container = styled.div `
    height: 100vh;
`

export default Home;