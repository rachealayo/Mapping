import React from "react";
import styled from "styled-components";
import {BiCommentDots, BiPhoneCall, BiCopyright} from "react-icons/bi";
import {CiLocationOn} from "react-icons/ci";
import {CgMail, CgFacebook, CgTwitter, CgInstagram} from "react-icons/cg";

const Footer = () => {
  return(
    <Container>
        {/* <Box5>
        <Wrap>
          <Build>Ready To Build Your Community?</Build>
          <Free>Get Started For Free</Free>
        </Wrap>
     </Box5> */}
        <Wrapper>
          <Left>
            <Logo>
              <BiCommentDots/>
              Huddle
            </Logo>
            <Location>
              <CiLocationOn/>
              <Address>13, ganiyu olaiya street, Apple Estate, 
             Amuwo Odofin, Lagos State, Nigeria.</Address>
            </Location>
            <Phone>
             <BiPhoneCall/>
             <Number>07045031780</Number>
            </Phone>
            <Mail>
              <CgMail/>
              <Gmail>rachealojo306@gmail.com</Gmail>
            </Mail>
          </Left>
          <Midfooter>
            <Row1>
             <Span>About Us</Span>
             <Span>What We Do</Span>
             <Span>FAQ</Span>
            </Row1>
            <Row2>
             <Span>Career</Span>
             <Span>Blog</Span>
             <Span>Contact Us</Span>
            </Row2>
          </Midfooter>
          <Right>
            <SocialMed>
              <Facebook><CgFacebook/></Facebook>
              <Twitter><CgTwitter/></Twitter>
              <Instagram><CgInstagram/></Instagram>
            </SocialMed>
            <CopyRight>
              <BiCopyright/>
              Copyright 2023 Huddle. All rights reserved.
            </CopyRight>
          </Right>
           
        </Wrapper>
    </Container>
  )
     
  }
export default Footer;

const Container = styled.div`
color: black;
background-color: rgb(26, 29, 70);
width: 100%;
height: 70vh;
text-align: center;
display: flex;
justify-content: center;
align-items: center;
`;

// const Box5 = styled.div`
// height: 250px;
// width: 750px; 
// background-color: white;
// display: flex;
// justify-content: center;
// align-items: center;
// border-radius: 1rem;
// position: relative;
// left: 300px;
// top: 100px;
// `;


// const Wrap = styled.div`
// height: 80%;
// width: 70%; 
// background-color: transparent;
// display: flex;
// justify-content: center;
// align-items: center;
// flex-direction: column;
// `;

// const Build = styled.div`
// font-weight: bold;
// font-size: 30px;
// margin-bottom: 30px;
// `;

// const Free = styled.div`
// height: 60px;
// width: 60%; 
// color: white;
// background-color:rgba(238, 41, 221, 0.705);
// display: flex;
// justify-content: center;
// align-items: center;
// border-radius: 2rem;
// font-weight: bold;
// cursor: pointer;

// :hover{
//   color: black;
//   background-color: lightblue; 
//   // border: 1px solid black:
// }
// `;

const Wrapper = styled.div`
margin-top: 130px;
background-color: transparent;
width: 80%;
height: 70%;
display: flex;
justify-content: space-between;
align-items: center;
`;

const Left = styled.div`
// background-color: red;
width: 250px;
height: auto;
`;

const Logo = styled.div`
// background-color: green;
width: 150px;
height: 40px;
color: white;
font-size: 30px;
font-weight: bold;
display: flex;
// justify-content: center;
align-items: center;
`;

const Location = styled.div`
margin-top: 30px;
// background-color: pink;
width: 220px;
height: 50px;
color: white;
font-size: 20px;
display: flex;
justify-content: space-between;
`;

const Address = styled.div`
// background-color: teal;
width: 80%;
height: 50px;
color: white;
font-size: 12px;
`;

const Phone = styled.div`
margin-top: 30px;
// background-color: teal;
width: 130px;
height: 25px;
color: white;
font-size: 20px;
display: flex;
justify-content: space-between;
`;

const Number = styled.div`
// background-color: purple;
width: 80px;
height: 25px;
color: white;
font-size: 12px;
display: flex;
align-items: center;
`;

const Mail = styled.div`
margin-top: 30px;
// background-color: tomato;
width: 200px;
height: 25px;
color: white;
font-size: 20px;
display: flex;
justify-content: space-between;
`;

const Gmail = styled.div`
// background-color: yellow;
width: 150px;
height: 25px;
color: white;
font-size: 12px;
display: flex;
align-items: center;
`;

const Midfooter = styled.div`
// background-color: purple;
width: 30%;
height: 25%;
display: flex;
justify-content: space-between;
`;

const Row1 = styled.div`
// background-color: peru;
width: 40%;
`;

const Span = styled.div`
color: white;
font-size: 11px;
margin-bottom: 15px;

:hover{
  cursor: pointer;
  text-decoration: underline;
}
`;

const Row2 = styled.div`
// background-color: peru;
width: 40%;
`;

const Right = styled.div`
margin-top: 70px;
// background-color: blue;
width: 30%;
height: 50%;
display: flex;
justify-content: space-between;
flex-direction: column;
`;

const SocialMed = styled.div`
// background-color: orange;
width: 35%;
height: 40px;
display: flex;
justify-content: space-between;
`;

const Facebook = styled.div`
background-color: transparent;
color: white;
width: 30px;
height: 30px;
border-radius: 50%;
border: 1px solid white;
display: flex;
justify-content: center;
align-items: center;

:hover{
  cursor: pointer;
  color: fuchsia;
  border: 1px solid fuchsia;
  background-color: transparent;
}
`;

const Twitter = styled.div`
background-color: transparent;
color: white;
width: 30px;
height: 30px;
border-radius: 50%;
border: 1px solid white;
display: flex;
justify-content: center;
align-items: center;

:hover{
  cursor: pointer;
  color: fuchsia;
  border: 1px solid fuchsia;
  background-color: transparent;
}
`;

const Instagram = styled.div`
background-color: transparent;
color: white;
width: 30px;
height: 30px;
border-radius: 50%;
border: 1px solid white;
display: flex;
justify-content: center;
align-items: center;

:hover{
  cursor: pointer;
  color: fuchsia;
  border: 1px solid fuchsia;
  background-color: transparent;
}
`;

const CopyRight = styled.div`
// background-color: yellow;
width: auto;
height: 25%;
display: flex;
font-size: 13px;
color: white;
`;