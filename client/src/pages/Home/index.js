import React from "react";
// import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import styled from "styled-components";
import background from "../../assests/background-event.jpg";
import { useHistory } from "react-router-dom";
import { useFetch } from "./Backendhooks"; //to handle fetch data request from flask

const Styles = styled.div`
 .jumbo{
    // background: url(${background}) no-repeat fixed bottom;
    background-color: #7eb3c794;
    color:black;
    margin-top: 0px;
    margin-bottom: 5px;
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

 .jumbo h2{
  font-size: 30px;
  }

 .jumbo p{
   font-size: 18px;
  }

 .jumbo li{
   list-style-type: none;
  }`;

const Home = () => {

  let history = useHistory();
  const url = "/index"; //URL of flask/backend server
  const [Events, hasErrors] = useFetch(url); // to call flask/backend server
  console.log(Events);
  function handleClick(EventId) {
    history.push({ pathname: "/event/" + EventId });
  }

  return (
    <Styles>
      <div className="container">
        {Events.map(event => ( //Looping through events to populate data on the jumbotron
          <Jumbotron className="jumbo" onClick={() => handleClick(event.id)} key={event.id}>
            <h2> {event.title} </h2>
            <br />
            <h5> Performers: </h5>
            {event.performers.length > 3 ?
              event.performers.slice(0, 3).map((performer, index) => ( // looping through performers if there are multiple
                <p key={index}>{performer.name}</p>
              ))
              :
              event.performers.map((performer, index) => ( // looping through performers if there are multiple
                <p key={index}>{performer.name}</p>
              ))}
            <br />
            <p> Date & Time: {event.datetime_utc.replace('T', '  ')} </p> {/*Date & Time of Event*/}
          </Jumbotron>
        ))}
      </div>
    </Styles>
  );
}

export default Home;
