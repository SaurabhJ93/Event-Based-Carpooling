import React from "react";
//import eventImg from "../../assests/demoimg.jpg";
import "../../assests/styles/eventStyle.css";
import { useFetch } from "./Backendhooks"; //to handle fetch data request from flask
import axios from "axios";
import Moment from "moment";

const Event = ({ match }) => {

  const eventId = match.params.eventid; //URL to fetch event details data from flask/backend server

  const [event, Rides, hasErrors] = useFetch(eventId); // to call flask/backend server
  console.log(Rides);
  const userId = 'ageldartp'; //Hardcoded logged In user ID

  const handleSaveRequest = (eventId) => {

    axios({
      method: 'post',
      url: 'http://localhost:5000/saveRequest',
      data: {
        eventId: eventId,
        // rideId: rideId,
        // userId: userId
      }
    });
  };

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
            {Rides.map(ride => (
              <li className="list-group-item py-4 bg-info shadow mb-3 rounded" key={ride.RIDE_ID}>
                <p className="p-rider"> Rider:
                 <span className="ml-2">{ride.RIDE_HOST_USERNAME}</span>
                </p>
                <p className="p-rider">Start Date:
                <span className="ml-2">{Moment(ride.START_TIME).format('MMM-DD-YYYY')}</span>
                </p>
                <p className="p-rider">Start Time:
                <span className="ml-2">{Moment(ride.START_TIME).format('hh:mm')}</span>
                </p>
                {ride.STATUS != "pending" &&
                  <button type="button" onClick={() => handleSaveRequest(ride.RIDE_ID)} className="btn btn-dark btn-lg float-right">
                    Request Ride
                </button>}
              </li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
};

export default Event;
