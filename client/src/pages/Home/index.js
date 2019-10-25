import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import styled from "styled-components";
import background from "../../assests/background-event.jpg";
import { useHistory } from "react-router-dom";

const Styles = styled.div`
 .jumbo{
    // background: url(${background}) no-repeat fixed bottom;
    background-color: #7eb3c794;
    color:black;
    margin-top: 0px;
    margin-bottom: 2px;
    max-width: 80%;
    margin-left: 12%;
    &:hover{
        background-color: #69a8af;
    }
 };
 .container{
    background: url(${background}) no-repeat fixed bottom;
    max-width: inherit;
    min-height: 85vh;
 };
`;

// Temporary class for generating events
const tempforevents = [];
let i = 0;
for (i = 0; i < 5; i++) {
  tempforevents.push(`Event number ${i}`);
}

const Home = () => {
  let history = useHistory();

  function handleClick() {
    history.push("/event");
  }

  return (
    <Styles>
      <div className="container">
        {tempforevents.map(event => (
          <Jumbotron className="jumbo" onClick={handleClick}>{event}</Jumbotron>
        ))}
        ;
      </div>
    </Styles>
  );
};

export default Home;
