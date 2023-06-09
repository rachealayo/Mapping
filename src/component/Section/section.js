import React from "react";
import styled from "styled-components";

const Card = (props) => {
  return(
   <Container>
     <Wrap>
       <Left>
         <H1>{props.title}</H1>
         <Text>{props.text}</Text>
       </Left>
       <Hero>
         <img src={props.img}/>
       </Hero>
     </Wrap>
   </Container>
  )
};

export default Card;

const Container = styled.div`
  height: 90vh;
  width: 100%;
  // background-color: blue;
  display: flex;
  justify-content: center;
  align-items: center;

`;

const Wrap = styled.div`
  height: 90%;
  width: 95%;
  border-radius: 1rem;
  // background-color: whitesmoke;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Left = styled.div`
  height: 100%;
  width: 50%;
  // background-color: blue;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const H1 = styled.div`
  font-weight: bold;
  font-size: 40px;
  margin-bottom: 40px;
`;

const Text = styled.div`
  font-size: 20px;
  margin-bottom: 30px;
  color: grey;
`;

const Hero = styled.div`
  height: 100%;
  width: 50%;
  // background-color: tomato;
  display: flex;
  justify-content: center;
  align-items: center;

  img{
    height: 80%;
    width: 100%;
  }
`;