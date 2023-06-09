import React from "react";
import styled from "styled-components";
import Card from "../Card/card"
import JsonData from "../Data.json"

const Home = () => {
  return(
    <Div>
      <H1>Mapping json data in React</H1>
      <Wrapper>

        {JsonData.map((el) => {
          return(
            <Card idd={el.id} namee={el.name} coursee={el.Course} Sectionn={el.section && el.section.map((val) => {
              return( 
                <div>{val.name}</div>
              )
            })}/>
          )
        })}
       
      </Wrapper>
    </Div>
  )
};

export default Home;

const Div = styled.div`
height: 90vh;
width: 100%;
// background-color: green;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`;

const Wrapper = styled.div`
height: 90%;
width: 90%;
// background-color: teal;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
// align-items: center;
`;

const H1 = styled.div`
font-size: 30px;
font-weight: bold;
display: flex;
justify-content: center;
align-items: center;
// background-color: red;
`;








