import React, {useState} from "react";
import styled from "styled-components";
import {FaBars, FaTimes} from 'react-icons/fa';

const Header = () => {
  const [click, setClick] = useState(false)

  const handleClick = () => {
    setClick(!click)
  }

  return(
     <Container>
       <ContainerWrapper>
        <Logo>LOGO</Logo>
        <Navs onClick={handleClick} click={click}>
          <NavLinks href="">Home</NavLinks>
          <NavLinks href="">About</NavLinks>
          <NavLinks href="">Contact</NavLinks>
          <NavLinks href="">Gallery</NavLinks>
        </Navs>
        <MobileIcon onClick={handleClick}>
          {click ? <FaTimes/> : <FaBars/>}

        </MobileIcon>
       </ContainerWrapper>
     </Container>
   )
};


export default Header;

const Container = styled.div`
width: 100%;
background-color: black;
height: 10vh;
color: white;
display: flex;
justify-content: center;
`;

const ContainerWrapper = styled.div`
width: 90%;
height: 100%;
display: flex;
justify-content: space-between;
align-items: center;
`
const Logo = styled.div`
z-index: 500;
`;

const Navs = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 40%;

@media screen and (max-width: 768px){
  display: flex;
  flex-direction: column;
  width: 100%;
  position: absolute;
  background-color: black;
  height: 80vh;
  justify-content: space-evenly;
  top: ${({click}) => (click ? 0 : '-100%')};
  transition: all 0.8s ease;
  margin-top: 80px
}
`;
const MobileIcon = styled.div`
display: none;
z-index: 500;

@media screen and (max-width: 768px){
  display: flex;
}
`;

const NavLinks = styled.a`
display: flex;
text-decoration: none;
color: white;
cursor: pointer;
`;




