import React from "react";
import styled from "styled-components";
import Card4 from "../Card/card";

const Service = (props) => {
  return(
    <div>
      <Container>
       <Wrapper>
          <Card4 title='Your Users' text='It takes no time at all to integrate Huddle with your app`s authentication solution.
          This means, once signed in to your app, your users can start chatting immediately.'img='/yourUser.svg'/>
       </Wrapper>
     </Container>
    </div>
  )
};

export default Service;

const Container =styled.div`
height: 90vh;
width: 100%;
// background-color: blue;
display: flex;
justify-content: center;
align-items: center;
`;

const Wrapper =styled.div`
height: 90%;
width: 80%;
background-color: white;
display: flex;
justify-content: center;
align-items: center;
`;
