import React from "react";
import styled from "styled-components";
import StyledDiv, { StyledPara } from "../../assests/styles/eventStyle.js";
import eventImg from "../../assests/demoimg.jpg";

const events = {
  name: "Alice Cooper event",
  location: "Barbara B. Mann Performing Arts Hall,FL",
  date: "10-25-2019",
  performer: "Singer",
  imgUrl: eventImg,
  desciption:
    'Cooper is known for his witty personality offstage, with The Rolling Stone Album Guide calling him the world\'s most "beloved heavy metal entertainer"'
};

const usersRide = [];
let i = 0;
for (i = 1; i <= 10; i++) {
  usersRide.push(`Carpool ${i}`);
}

const Event = () => {
  return (
    <StyledDiv>
      <div className="container">
        <div className="row">

          <div className="col-sm-6">
            <StyledPara>
              <p className="eventHeading">{events.name}</p>
              <img class="card-img-top" src={events.imgUrl} alt="Card image cap" />
              <br />
              <p>
                Name:<span><em>{events.name}</em></span>
              </p>
              <p>
                Date/Time:<span><em>{events.date}</em></span>
              </p>
              <p>
                Location:<span> <em>{events.location}</em></span>
              </p>
              <p>
                Performer:<span><em>{events.performer}</em> </span>
              </p>
              <p>
                Desciption:<span><em>{events.desciption}</em></span>
              </p>
              <br />
              <button type="button" class="btn btn-dark btn-lg">
                Offer a Ride
              </button>
            </StyledPara>
          </div>

          <div className="col-sm-6">
            <h2 class="h2-request">Request a Ride</h2>
            <ul class="list-group">
              {usersRide.map(user => (
                <li class="list-group-item py-4 bg-info">
                  <p class="float-left p-rider">{user}</p>
                  <button type="button" class="btn btn-dark btn-lg float-right">
                    Request Ride
                  </button>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </StyledDiv>
  );
};

export default Event;
