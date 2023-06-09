import React from "react";
import styled from "styled-components";

const About = () => {
  return(
    <div>
      <Container>
       <Wrapper>
       
       </Wrapper>
     </Container>
    </div>
  )
};

export default About;

const Container = styled.div`
height: 30vh;
width: 100%;
// background-color: orange;
display: flex;
justify-content: center;
align-items: center;
`;

const Wrapper = styled.div`
height: 95%;
width: 80%;
background-color: white;
display: flex;
justify-content: space-between;
align-items: center;

`;
