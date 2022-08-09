import React from 'react'
import styled from 'styled-components'
import { Section } from './Section'
import model_s from '../images/model-s.jpg'
import model_y from '../images/model-y.jpg'
import model_x from '../images/model-x.jpg'
import model_3 from '../images/model-3.jpg'
import solar_panel from '../images/solar-panel.jpg'
import solar_roof from '../images/solar-roof.jpg'
import accessories from '../images/accessories.jpg'

export const Home = () => {
    return (
        <Container>
            <Section 
                title="Model S" 
                description = "Order Online for Touchless Delivery"
                backgroundImg = {model_s}
                leftBtnText = "Custom Order"
                rightBtnText = "Existing Inventory"
            />
            <Section 
                title="Model Y" 
                description = "Order Online for Touchless Delivery"
                backgroundImg = {model_y}
                leftBtnText = "Custom Order"
                rightBtnText = "Existing Inventory"
            />
            <Section 
                title="Model 3" 
                description = "Order Online for Touchless Delivery"
                backgroundImg = {model_3}
                leftBtnText = "Custom Order"
                rightBtnText = "Existing Inventory"
            />
            <Section 
                title="Model X" 
                description = "Order Online for Touchless Delivery"
                backgroundImg = {model_x}
                leftBtnText = "Custom Order"
                rightBtnText = "Existing Inventory"
            />
            <Section 
                title="Lowest Cost Solar Panels in America" 
                description = "Money-back guarantee"
                backgroundImg = {solar_panel}
                leftBtnText = "Order Now"
                rightBtnText = "Learn more"
            />
            <Section 
                title="Solar for New Roofs" 
                description = "Solar Roof Costs Less Than a New Roof Plus Solar Panels"
                backgroundImg = {solar_roof}
                leftBtnText = "Order Now"
                rightBtnText = "Learn more"
            />
            <Section 
                title="Accessories" 
                description = ""
                backgroundImg = {accessories}
                leftBtnText = "Shop Now"
            />
        </Container>
    )
}

const Container = styled.div`
    height: 100vh
`