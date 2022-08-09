import React, { useState } from 'react'
import styled from 'styled-components'
import logo from "../images/logo.svg"
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { selectCars } from '../features/Car/CarSlice'
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";

export const Header = () => {
  const [burgerStatus, setBurgerStatus] = useState(false)
  const cars = useSelector(selectCars)
  return (
    <Container>
      <Link to='/'>
        <img src={logo} alt="" />
      </Link>
      <Menu>
        {cars && cars.map((car, index) => (
          <Link key={index} to="/Tesla_Clone/">{car}</Link>
        ))}

      </Menu>
      <RightMenu>
        <Link to="/Tesla_Clone/">Shop</Link>
        <Link to="/Tesla_Clone/">Tesla Account</Link>
        <CustomMenu onClick={() => setBurgerStatus(true)} />
      </RightMenu>
      <BurgerNav show={burgerStatus}>
        <CloseWrapper>
          <CustomClose onClick={() => setBurgerStatus(false)} />
        </CloseWrapper>
        {cars && cars.map((car, index) => (
          <li key={index}><Link to='/'>{car}</Link></li>
        ))}
        <li><Link to='/Tesla_Clone/'>Existing Inventory</Link></li>
        <li><Link to='/Tesla_Clone/'>Used Inventory</Link></li>
        <li><Link to='/Tesla_Clone/'>Trade-in</Link></li>
        <li><Link to='/Tesla_Clone/'>Cybertruck</Link></li>
        <li><Link to='/Tesla_Clone/'>Roadster</Link></li>
      </BurgerNav>
    </Container>
  )
}

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
`

const Menu = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: center;

  a{
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px ;
    flex-wrap: nowrap;
  }

  @media (max-width: 768px){
    display: none;
  }
`

const RightMenu = styled.div`
display: flex;
align-items: center;
    a{
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
  }
`

const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: white;
  width: 300px;
  list-style: none;
  padding: 20px;
  transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
  transition: transform 0.2s ease-in-out;

  li{
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  }

  a{
    font-weight: 600;
  }
`

const CustomClose = styled(CloseIcon)`
  cursor: pointer;
`

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`