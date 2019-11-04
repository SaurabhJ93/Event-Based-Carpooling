import React from "react";
import eventImg from "../../assests/demoimg.jpg";
import "../../assests/styles/eventStyle.css";
import { useFetch } from "./Backendhooks"; //to handle fetch data request from flask

const usersRide = [];
let i = 0;
for (i = 1; i <= 2; i++) {
  usersRide.push(`Carpool ${i}`);
}

const Event = ({ match }) => {
  const url = "/event/"+match.params.eventid; //URL of flask/backend server
  const [event, hasErrors] = useFetch(url); // to call flask/backend server
  
  return (

    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-6">
        <p className="eventHeading">{event.title}</p>
            <img className="card-img-top" src={event.image} alt="Card cap pic" />
            <br />
            <p>
              Name: <span><em>{event.title}</em></span>
            </p>
            <p>
              Date/Time: <span><em>{event.datetime_local}</em></span>
            </p>
            <p>
              Location: <span> <em>{event.full_address}</em></span>
            </p>
            <p> Performer: <span><em>{event.performers_names}</em> </span> </p>
            <p>
              Desciption: <span><em>{event.description}</em></span>
            </p>
            <br />
            <button type="button" className="btn btn-dark btn-lg ml-4">
              Offer a Ride
            </button>
        </div>

        <div className="col-sm-6">
          <h2 className="h2-request text-center">Request a Ride</h2>
          <ul className="list-group">
            {usersRide.map(user => (
              <li className="list-group-item py-4 bg-info" key={user}>
                <p className="float-left p-rider">{user}</p>
                <button type="button" className="btn btn-dark btn-lg float-right">
                  Request Ride
                  </button>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
};

export default Event;
